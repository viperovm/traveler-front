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

import { connect } from 'react-redux'
import { setTourName } from '../../../redux/actions/tourSectionActions'
import {
  getTourTypes,
  updateTour,
  getLanguages,
  setPropertyImage,
} from '../../../redux/actions/toursActions'
import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'

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
}) => {
  const [data, setData] = useState()
  const [completed, setCompleted] = useState(false)

  const handleInput = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  useEffect(() => {
    getLanguages()
  }, [])

  useEffect(() => {
    if (tour) {
      setData({
        languages: tour.languages,
        difficulty_level: tour.difficulty_level,
        difficulty_description: tour.difficulty_description,
        comfort_level: tour.comfort_level,
        tour_property_types: tour.tour_property_types,
        accomodation: tour.accomodation,
        hotel_name: tour.hotel_name,
        tour_property_images: tour.tour_property_images,
        age_starts: tour.age_starts,
        age_ends: tour.age_ends,
        babies_alowed: tour.babies_alowed,
        animals_not_exploited: tour.animals_not_exploited,
        media_link: tour.media_link,
        description: tour.description,
        main_impressions: tour.main_impressions,
        plan: tour.plan,
      })
    }
  }, [tour])

  useEffect(() => {
    if (data) {
      if (
        data.languages &&
        data.description &&
        data.main_impressions &&
        data.plan
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
  }, [data])

  const handleImageLoad = (image) => {
    setPropertyImage(image, tour.id)
  }

  const handleButtonSubmit = () => {
    updateTour(data, tour.id)
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
          val={data && data.languages}
          options={languages}
        />
      </SingleWrapper>
      <RadioInput
        action={handleInput}
        name='difficulty_level'
        label='Укажите сложность программы'
        value={data && data.difficulty_level}
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
          value={data && data.difficulty_description}
          rows='7'
        />
      </SingleWrapper>
      <RadioInput
        action={handleInput}
        name='comfort_level'
        label='Как вы оцениваете уровень комфорта в путешествии?'
        value={data && data.comfort_level}
        comment='Комфорт - один из главных критериев выбора путешествия. Градацию уровней комфорта можно посмотреть здесь'
      />
      <SingleWrapper label='Где планируется проживание' comment=''>
        <SelectInput
          action={handleInput}
          name='tour_property_types'
          label='Где планируется проживание'
          value={data && data.tour_property_types}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Размещение' comment=''>
        <SelectInput
          action={handleInput}
          name='accomodation'
          label='Размещение'
          value={data && data.accomodation}
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
          value={data && data.hotel_name}
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
          value={data && data.tour_property_images}
          type='file'
          // multiple
        />
      </SingleWrapper>

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='age_starts'
          label='Возраст участников от:'
          value={data && data.age_starts}
          // type=''
          // multiple
        />
        <Input
          action={handleInput}
          name='age_ends'
          label='Возраст участников до:'
          value={data && data.age_ends}
          // type='date'

          // multiple
        />
      </DoubleWrapper>

      <CheckboxInput
        action={handleInput}
        name='babies_alowed'
        label='Возможно участие с маленькими детьми'
        comment=''
        value={data && data.babies_alowed}
      />
      <CheckboxInput
        action={handleInput}
        name='animals_not_exploited'
        label='В программе не эксплуатируются животные'
        comment='Если в вашей поездке не используется труд животных - можете отметить. Мы это ценим. '
        value={data && data.animals_not_exploited}
      />

      <SingleWrapper label='Ссылка на видео (youtube или vimeo)' comment=''>
        <Input
          action={handleInput}
          name='media_link'
          value={data && data.media_link}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Описание тура' comment=''>
        <TextEditor
          action={handleInput}
          name='description'
          value={data && data.description}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Главные впечатления' comment=''>
        <TextArea
          action={handleInput}
          name='main_impressions'
          label=''
          value={data && data.main_impressions}
          rows='7'
        />
      </SingleWrapper>

      <SingleWrapper label='Чем мы займемся в туре' comment=''>
        <TextEditor
          action={handleInput}
          name='plan'
          value={data && data.plan}
          // multiple
        />
      </SingleWrapper>
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
})

export default connect(mapStateToProps, {
  getTourTypes,
  setSecondaryNav,
  updateTour,
  getLanguages,
  setPropertyImage,
})(Details)
