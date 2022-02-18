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
  updateTour,
  addDay,
} from '../../../redux/actions/toursActions'
import {
  setActiveSections,
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import Modal from './Modal'
import TrippleWrapper from '../Wrappers/TrippleWrapper'
import Day from './Day'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


function TabPanel({ children, value, index,  }) {

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Days = ({
  tour,
  action,
  getRegions,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  addDay,
}) => {
  const [data, setData] = useState([])
  const [completed, setCompleted] = useState(false)

  const [value, setValue] = useState(0)

  const [days, setDays] = useState([1])
  const [loading, setLoading] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (tour) {
      setData(tour.tour_days)
    }
    let arr = []
    for (let i = 1; i <= tour.tour_days.length; i++) {
      arr.push(i)
    }
    setDays(arr)
  }, [tour])

  

  console.log('days data: ', data)
  console.log(tour.id)

  const handleInput = (value, id) => {
    let arr = data.filter(item => item.day_id !== id)
    arr.push(value)
    setData(arr)
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

  useEffect(() => {
    if (days && loading) {
      setLoading(false)
    }
  }, [days, loading])

  const handleDayAdd = () => {
    setLoading(true)
    addDay(tour.id)
  }

  const handleButtonSubmit = () => {
    updateTour(data, tour.id)
    action('leader')
  }

  const handleButtonBack = () => {
    action('details')
  }

  return (
    <>
      {data.length > 1 && (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
              variant='scrollable'
              scrollButtons='auto'
            >
              {days.map((item, index) => (
                <Tab key={index} label={`День ${item}`} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>
          {data.map((item, index) => (
            <TabPanel key={index} value={value} index={index}>
              <Day id={index + 1} action={handleInput} day={item} />
            </TabPanel>
          ))}
        </Box>
      )}
      {data.length === 1 && <Day id={data[0]} action={handleInput} />}
      <Button
        active={true}
        action={handleDayAdd}
        color='button-primary'
        text='Добавить день'
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '66%',
        }}
      >
        <Button
          color='button-primary'
          active={true}
          action={handleButtonBack}
          text='Назад'
        />
        <Button active={true} action={handleButtonSubmit} />
      </div>
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
  updateTour,
  addDay,
})(Days)
