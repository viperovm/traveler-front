import { useState, useEffect } from 'react'
import { getTourTypes, addTour } from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'
import { setPage } from '../../../redux/actions/authActions'
import {
  setCurrentSection,
  zeroingData,
} from '../../../redux/actions/tourSectionActions'
import Common from '../Components/Common'
import Prices from '../Components/Prices'
import Cancellation from '../Components/Cancellation'
import Details from '../Components/Details'
import Days from '../Components/Days'
import Leader from '../Components/Leader'
import Conditions from '../Components/Conditions'
import ExtraServices from '../Components/ExtraServices'
import Important from '../Components/Important'
import Gallery from '../Components/Gallery'

const AddTour = ({
  getTourTypes,
  toursTypes,
  setPage,
  status,
  currentSection,
  setCurrentSection,
  current_tour,
}) => {
  // const [currentSection, setCurrentSection] = useState('common')
  const [tourId, setTourId] = useState(null)

  console.log(current_tour)

  useState(() => {
    if (status === 'customers') {
      Router.push('/does-not-exist')
    }
  }, [status])

  useEffect(() => {
    getTourTypes()
    setPage('tours')
  }, [])

  // const [sectionStatus, sectionSetStatus] = useState({
  //   common: false,
  //   prices: false,
  //   options: false,
  //   details: false,
  //   day: false,
  //   leader: false,
  //   conditions: false,
  //   services: false,
  //   important: false,
  //   photos: false,
  // })

  return (
    <>
      <div className='common-section'>
        {currentSection === 'common' && (
          <Common action={setCurrentSection} tour={current_tour} />
        )}
        {currentSection === 'prices' && (
          <Prices action={setCurrentSection} tour={current_tour} />
        )}
        {currentSection === 'options' && (
          <Cancellation action={setCurrentSection} tour={current_tour} />
        )}
        {currentSection === 'details' && (
          <Details action={setCurrentSection} tour={current_tour} />
        )}
        {currentSection === 'day' && (
          <Days action={setCurrentSection} tour={current_tour} />
        )}
        {currentSection === 'leader' && (
          <Leader action={setCurrentSection} tour={current_tour} />
        )}
        {currentSection === 'conditions' && (
          <Conditions action={setCurrentSection} tour={current_tour} />
        )}
        {currentSection === 'services' && (
          <ExtraServices action={setCurrentSection} tour={current_tour} />
        )}
        {currentSection === 'important' && (
          <Important action={setCurrentSection} tour={current_tour} />
        )}
        {currentSection === 'photos' && (
          <Gallery action={setCurrentSection} tour={current_tour} />
        )}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  current_tour: state.tours.current_tour,
  status: state.auth.status,
  currentSection: state.tourSection.current_section,
})

export default connect(mapStateToProps, {
  getTourTypes,
  setPage,
  setCurrentSection,
  zeroingData,
  addTour,
})(AddTour)
