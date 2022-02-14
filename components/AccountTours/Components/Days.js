import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import RadioInput from '../FormFields/RadioInput'
import TextEditor from '../FormFields/TextEditor'
import TextArea from '../FormFields/TextArea'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'

import { connect } from 'react-redux'
import { setTourName } from '../../../redux/actions/tourSectionActions'
import {
  getTourTypes,
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
} from '../../../redux/actions/toursActions'
import {
  setActiveSections,
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import Modal from './Modal'
import TrippleWrapper from '../Wrappers/TrippleWrapper'
import Day from './Day'





const Days = ({
  action,
  getRegions,
  secondary_nav,
  setSecondaryNav,
}) => {
  const [data, setData] = useState([])
  const [completed, setCompleted] = useState(false)
  const [days, setDays] = useState([1,])
  const [currentKey, setCurrentKey] = useState(1)
  
  useEffect(() => {
    getRegions()
  }, [])

  useEffect(() => {
    setCurrentKey(days[days.length - 1])
  }, [days])

  const handleInput = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  

  useEffect(() => {
    if (data) {
      if (
        data.day &&
        data.location &&
        data.day_description &&
        data.day_photo &&
        data.day_route
      ) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'day') {
              return {
                ...item,
                active: true,
              }
            } else {
              return item
            }
          })
        )
      } else {
        setCompleted(false)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'day') {
              return {
                ...item,
                active: false,
              }
            } else {
              return item
            }
          })
        )
      }
    }
  }, [data])

  

  



  const handleDayAdd = () => {
    let arr = days
    arr.push(arr[arr.length-1] + 1)
    console.log(arr)
    setDays(arr)
  }

  const handleButtonSubmit = () => {
    // updateTour(data)
    action('leader')
  }

  return (
    <>
      <div key={currentKey}>
      {days.map(item => (
        <Day key={item} id={item} action={handleInput} />
      ))}</div>
      <Button
        active={true}
        action={handleDayAdd}
        color='button-primary'
        text='Добавить день'
      />
      <Button active={true} action={handleButtonSubmit} />
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  regions: state.tours.regions,
  countries: state.tours.countries,
  russianRegions: state.tours.russian_regions,
  cities: state.tours.cities,
  secondary_nav: state.tourSection.secondary_nav,
})

export default connect(mapStateToProps, {
  setTourName,
  getTourTypes,
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
  setSecondaryNav,
})(Days)
