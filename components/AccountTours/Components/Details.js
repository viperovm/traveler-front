import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import RadioInput from '../FormFields/RadioInput'
import TextEditor from '../FormFields/TextEditor'
import TextArea from '../FormFields/TextArea'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'

import CircularProgress from '@mui/material/CircularProgress'

import { connect } from 'react-redux'
import { setTourName } from '../../../redux/actions/tourSectionActions'
import {
  getTourTypes,
  updateTour,
  getLanguages,
  setPropertyImage,
  addActivity,
} from '../../../redux/actions/toursActions'
import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'

import { update_tour } from '../../../redux/actions/currentTourActions'
// import Activities from './Activities'
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

const Details = ({
  tour,
  action,
  toursTypes,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  getLanguages,
  languages,
  setPropertyImage,
  update_tour,
  addActivity,
}) => {
  // const [tour, settour] = useState()

  const [data, setData] = useState([])

  const [completed, setCompleted] = useState(false)

  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState([1])

  const handleActivityInput = (value, id) => {
    let arr = data.filter(item => item.id !== id)
    arr.push(value)
    setData(arr)
  }

  useEffect(() => {
    if (tour && tour.plan && tour.plan.length === 0) {
      addActivity(tour.id)
      setLoading(true)
    }
  }, [])

  useEffect(() => {
    if (tour && tour.plan) {
      setData(tour.plan)
      setLoading(false)
    }
    if (tour && tour.plan.length > 1) {
      let arr = []
      for (let i = 1; i <= tour.plan.length; i++) {
        arr.push(i)
      }
      setActivities(arr)
    }
    if (tour && tour.plan.length === 1) {
      setActivities([1])
    }
  }, [tour])

  const handleDayAdd = () => {
    setLoading(true)
    addActivity(tour.id)
  }


  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInput = (name, value) => {
    update_tour(name, value)
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
    getLanguages()
  }, [])

  useEffect(() => {
    if (tour) {
      if (
        tour.languages &&
        tour.description &&
        tour.main_impressions &&
        tour.plan
      ) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'details') {
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
            if (item.value === 'details') {
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
  }, [tour])

  const handleImageLoad = image => {
    setPropertyImage(image, tour.id)
  }

  const handleButtonSubmit = () => {
    updateTour(tour, tour.id)
    action('day')
  }

  const handleButtonBack = () => {
    action('options')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Детали</h4>
      </div>

      <SingleWrapper
        label='На каком языке говорят в путешествии'
        comment='Выбирайте только те языки, на которых будут говорить в путешествии '
      >
        <SelectInput
          action={handleInput}
          name='languages'
          label='Валюта тура'
          val={tour && tour.languages}
          options={languages}
        />
      </SingleWrapper>
      <RadioInput
        action={handleInput}
        name='difficulty_level'
        label='Укажите сложность программы'
        value={tour && tour.difficulty_level}
        comment='Уровень активности должен соответствовать нагрузкам, которые ожидаются в путешествии. Градацию уровней активности можно посмотреть здесь'
      />
      <SingleWrapper
        label='Кратко опишите в чем заклдючается сложность тура'
        comment=''
      >
        <TextArea
          action={handleInput}
          name='difficulty_description'
          label=''
          value={tour && tour.difficulty_description}
          rows='7'
        />
      </SingleWrapper>
      <RadioInput
        action={handleInput}
        name='comfort_level'
        label='Как вы оцениваете уровень комфорта в путешествии?'
        value={tour && tour.comfort_level}
        comment='Комфорт - один из главных критериев выбора путешествия. Градацию уровней комфорта можно посмотреть здесь'
      />
      {/* <div className='my-tours-section-heading'>
        <h4 style={{ marginBottom: 10 }}>Размещение</h4>
      </div> */}

      <SingleWrapper label='Где планируется проживание' comment=''>
        <SelectInput
          action={handleInput}
          name='tour_property_types'
          label='Где планируется проживание'
          value={tour && tour.tour_property_types}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Размещение' comment=''>
        <SelectInput
          action={handleInput}
          name='accomodation'
          label='Размещение'
          value={tour && tour.accomodation}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Название отеля'
        comment='Вводите, если уверены в 100% гарантии размещения '
      >
        <Input
          action={handleInput}
          name='hotel_name'
          value={tour && tour.hotel_name}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Добавить фото мест проживания в путешествии'
        comment=''
      >
        <ObjectFileInput
          action={handleImageLoad}
          name='tour_property_images'
          value={tour && tour.tour_property_images}
          type='file'
          // multiple
        />
      </SingleWrapper>
      {/* <Accomodations /> */}

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='age_starts'
          label='Возраст участников от:'
          value={tour && tour.age_starts}
          // type=''
          // multiple
        />
        <Input
          action={handleInput}
          name='age_ends'
          label='Возраст участников до:'
          value={tour && tour.age_ends}
          // type='date'

          // multiple
        />
      </DoubleWrapper>

      <CheckboxInput
        action={handleInput}
        name='babies_alowed'
        label='Возможно участие с маленькими детьми'
        comment=''
        value={tour && tour.babies_alowed}
      />
      <CheckboxInput
        action={handleInput}
        name='animals_not_exploited'
        label='В программе не эксплуатируются животные'
        comment='Если в вашей поездке не используется труд животных - можете отметить. Мы это ценим. '
        value={tour && tour.animals_not_exploited}
      />

      <SingleWrapper label='Ссылка на видео (youtube или vimeo)' comment=''>
        <Input
          action={handleInput}
          name='media_link'
          value={tour && tour.media_link}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Описание тура' comment=''>
        <TextEditor
          action={handleInput}
          name='description'
          value={tour && tour.description}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Главные впечатления' comment=''>
        <TextArea
          action={handleInput}
          name='main_impressions'
          label=''
          value={tour && tour.main_impressions}
          rows='7'
        />
      </SingleWrapper>

      <div className='my-tours-section-heading'>
        <h4 style={{ marginBottom: 10 }}>Активности во время тура</h4>
      </div>

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
      {/* <Button active={completed} /> */}
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  languages: state.tours.languages,
  secondary_nav: state.tourSection.secondary_nav,
  tour: state.local_tour.tour,
})

export default connect(mapStateToProps, {
  getTourTypes,
  setSecondaryNav,
  updateTour,
  getLanguages,
  setPropertyImage,
  update_tour,
  addActivity,
})(Details)
