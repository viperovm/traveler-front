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
import Photos from '../Components/Photos'

const AddTour = ({
  getTourTypes,
  setPage,
  status,
  currentSection,
  setCurrentSection,
  completed,
}) => {
  // const [currentSection, setCurrentSection] = useState('common')
  useState(() => {
    if (status === 'customers') {
      Router.push('/does-not-exist')
    }
  }, [status])

  useEffect(() => {
    getTourTypes()
    setPage('tours')
  }, [])

  const handleComplete = () => {
    completed()
  }

  return (
    <>
      <div className='common-section'>
        {currentSection === 'common' && (
          <Common action={setCurrentSection} />
        )}
        {currentSection === 'prices' && (
          <Prices action={setCurrentSection} />
        )}
        {currentSection === 'options' && (
          <Cancellation action={setCurrentSection} />
        )}
        {currentSection === 'details' && (
          <Details action={setCurrentSection} />
        )}
        {currentSection === 'day' && (
          <Days action={setCurrentSection} />
        )}
        {currentSection === 'leader' && (
          <Leader action={setCurrentSection} />
        )}
        {currentSection === 'conditions' && (
          <Conditions action={setCurrentSection} />
        )}
        {currentSection === 'services' && (
          <ExtraServices action={setCurrentSection} />
        )}
        {currentSection === 'important' && (
          <Important action={setCurrentSection} />
        )}
        {currentSection === 'photos' && (
          <Photos
            done={handleComplete}
            action={setCurrentSection}
          
          />
        )}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
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
