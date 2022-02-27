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

import CircularProgress from '@mui/material/CircularProgress'

import { connect } from 'react-redux'
import {
  updateTour,
  addActivity,
} from '../../../redux/actions/toursActions'
import {
  setActiveSections,
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import Modal from './Modal'
import TrippleWrapper from '../Wrappers/TrippleWrapper'
import Activity from './Activity'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function TabPanel({ children, value, index }) {
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

const Activities = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  addActivity,
}) => {
  const [data, setData] = useState([])
  const [completed, setCompleted] = useState(false)

  const [value, setValue] = useState(0)

  const [activities, setActivities] = useState([1])
  const [loading, setLoading] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (tour && tour.plan && tour.plan.length === 0) {
      addActivity(tour.id)
      setLoading(true)
    } else if (tour && tour.plan && tour.plan.length !== 0) {
        setLoading(false)
    }
  }, [tour])

  useEffect(() => {
    if (tour) {
      setActivityData(tour.plan)
    }
    let arr = []
    for (let i = 1; i <= tour.plan.length; i++) {
      arr.push(i)
    }
    setActivities(arr)
  }, [tour])

  const handleActivityInput = (value, id) => {
    let arr = data.filter(item => item.id !== id)
    arr.push(value)
    setData(arr)
  }

  useEffect(() => {
    if (data) {
      if (
        data.image &&
        data.description
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
    if (activities && loading) {
      setLoading(false)
    }
  }, [activities, loading])

  const handleDayAdd = () => {
    setLoading(true)
    addActivity(tour.id)
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
      {!loading && data.length > 1 && (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label='basic tabs example'
              variant='scrollable'
              scrollButtons='auto'
            >
              {activities.map((item, index) => (
                <Tab key={index} label={`День ${item}`} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>
          {data.map((item, index) => (
            <TabPanel key={index} value={value} index={index}>
              <Activity
                id={index + 1}
                action={handleActivityInput}
                day={item}
              />
            </TabPanel>
          ))}
        </Box>
      )}
      {data.length === 1 && (
        <Activity id={data[0]} action={handleActivityInput} />
      )}
      {loading && (
        <div className='fake-file-input loader-spinner'>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </div>
      )}
      <Button
        active={true}
        action={handleDayAdd}
        color='button-primary'
        text='Добавить активность'
      />
    </>
  )
}

const mapStateToProps = state => ({
  secondary_nav: state.tourSection.secondary_nav,
  tour: state.local_tour.tour,
})

export default connect(mapStateToProps, {
  updateTour,
  addActivity,
  setSecondaryNav,
})(Activities)
