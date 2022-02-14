import { useState, useEffect } from 'react'
import { getTourTypes, addTour } from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'
import { setPage } from '../../../redux/actions/authActions'
import {
  setCurrentSection,
  zeroingData,
} from '../../../redux/actions/tourSectionActions'
// import Input from '../FormFields/Input'
// import SelectInput from './SelectInput'
// import './tours'
// import CheckboxInput from '../FormFields/CheckboxInput'
// import DoubleWrapper from '../Wrappers/DoubleWrapper'
// import SingleWrapper from '../Wrappers/SingleWrapper'
// import TextArea from '../FormFields/TextArea'
// import RadioInput from '../FormFields/RadioInput'
// import TextEditor from '../FormFields/TextEditor'
// import DayAfterDay from '../DayAfterDay'
// import DaysHandler from '../DaysHandler'
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
  zeroingData,
  addTour,
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
    addTour()
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
          <Common action={setCurrentSection} tour_id={tourId} />
        )}
        {currentSection === 'prices' && (
          <Prices action={setCurrentSection} tour_id={tourId} />
        )}
        {currentSection === 'options' && (
          <Cancellation action={setCurrentSection} tour_id={tourId} />
        )}
        {currentSection === 'details' && (
          <Details action={setCurrentSection} tour_id={tourId} />
        )}
        {currentSection === 'day' && (
          <Days action={setCurrentSection} tour_id={tourId} />
        )}
        {currentSection === 'leader' && (
          <Leader action={setCurrentSection} tour_id={tourId} />
        )}
        {currentSection === 'conditions' && (
          <Conditions action={setCurrentSection} tour_id={tourId} />
        )}
        {currentSection === 'services' && (
          <ExtraServices action={setCurrentSection} tour_id={tourId} />
        )}
        {currentSection === 'important' && (
          <Important action={setCurrentSection} tour_id={tourId} />
        )}
        {currentSection === 'photos' && (
          <Gallery action={setCurrentSection} tour_id={tourId} />
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
