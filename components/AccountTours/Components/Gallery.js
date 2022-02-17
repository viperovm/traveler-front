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

const Gallery = ({
  action,
  tour_id,
  setTourName,
  getTourTypes,
  toursTypes,
  getRegions,
  regions,
  getCountries,
  getRussianRegions,
  getCities,
  countries,
  russianRegions,
  cities,
  setActiveSections,
  active_sections,
  secondary_nav,
  setSecondaryNav,
}) => {
  const [data, setData] = useState()
  const [completed, setCompleted] = useState(false)
  //   const [startRegionSet, setStartRegionSet] = useState(false)
  const [startCountrySet, setStartCountrySet] = useState(false)
  const [startRussianRegionSet, setStartRussianRegionSet] = useState(false)
  const [startCitySet, setStartCitySet] = useState(false)
  const [finishCountrySet, setFinishCountrySet] = useState(false)
  const [finishRussianRegionSet, setFinishRussianRegionSet] = useState(false)
  const [finishCitySet, setFinishCitySet] = useState(false)

  const [region, setRegion] = useState('')
  const [country, setCountry] = useState('')
  const [russianRegion, setRussianRegion] = useState('')
  const [city, setCity] = useState('')

  const [modalTitle, setModalTitle] = useState('Тестовое название')
  const [modalActive, setModalActive] = useState(true)

  console.log(completed)
  console.log(data)

  useEffect(() => {
    getRegions()
  }, [])

  const handleInput = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  useEffect(() => {
    if (data && data.start_region) {
      setStartCountrySet(true)
      getCountries(data.start_region)
    }
    if (data && data.start_country && data.start_country == 1) {
      setStartRussianRegionSet(true)
      getRussianRegions()
    }
    if (data && data.start_country && data.start_country != 1) {
      setStartCitySet(true)
      getCities(data.start_country)
    }
    if (data && data.start_russian_region) {
      setStartCitySet(true)
      getCities(data.start_country, data.start_russian_region)
    }
  }, [data])

  useEffect(() => {
    if (data && data.finish_region) {
      setFinishCountrySet(true)
    }
    if (data && data.finish_country && data.finish_country == 1) {
      setFinishRussianRegionSet(true)
    }
    if (data && data.finish_country && data.finish_country != 1) {
      setFinishCitySet(true)
    }
    if (data && data.finish_russian_region) {
      setFinishCitySet(true)
    }
  }, [data])

  useEffect(() => {
    if (data) {
      if (
        data.name &&
        data.basic_type &&
        data.additional_types &&
        data.start_city &&
        data.finish_city &&
        data.start_time &&
        data.finish_time
      ) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'common') {
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
            if (item.value === 'common') {
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

    if (data && data.name) {
      setTourName(data.name)
    }
  }, [data])

  const handleButtonSubmit = () => {
    // updateTour(data)
    action('days')
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
        <Input action={setData} name='tour_language' label='' old_data={data} />
      </SingleWrapper>
      <RadioInput
        action={setData}
        name='tour_difficulty'
        label='Укажите сложность программы'
        old_data={data}
        comment='Уровень активности должен соответствовать нагрузкам, которые ожидаются в путешествии. Градацию уровней активности можно посмотреть здесь'
      />
      <SingleWrapper
        label='Кратко опишите в чем заклдючается сложность тура'
        comment=''
      >
        <TextArea
          action={setData}
          name='tour_difficulty_comments'
          label=''
          old_data={data}
          rows='7'
        />
      </SingleWrapper>
      <RadioInput
        action={setData}
        name='Comfort_level'
        label='Как вы оцениваете уровень комфорта в путешествии?'
        old_data={data}
        comment='Комфорт - один из главных критериев выбора путешествия. Градацию уровней комфорта можно посмотреть здесь'
      />
      <SingleWrapper label='Где планируется проживание' comment=''>
        <SelectInput
          action={setData}
          name='accomodation'
          label='Где планируется проживание'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Размещение' comment=''>
        <SelectInput
          action={setData}
          name='accomodation_type'
          label='Размещение'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Название отеля'
        comment='Вводите, если уверены в 100% гарантии размещения '
      >
        <Input
          action={setData}
          name='hotel_name'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <DoubleWrapper ratio='1-2'>
        <Input
          action={setData}
          name='age_starts'
          label='Возраст участников от:'
          old_data={data}
          // type=''
          // multiple
        />
        <Input
          action={setData}
          name='age_ends'
          label='Возраст участников до:'
          old_data={data}
          // type='date'

          // multiple
        />
      </DoubleWrapper>

      <CheckboxInput
        action={setData}
        name='babies_accepted'
        label='Возможно участие с маленькими детьми'
        comment=''
        old_data={data}
      />
      <CheckboxInput
        action={setData}
        name='no_animals_esploited'
        label='В программе не эксплуатируются животные'
        comment='Если в вашей поездке не используется труд животных - можете отметить. Мы это ценим. '
        old_data={data}
      />

      <SingleWrapper label='Ссылка на видео (youtube или vimeo)' comment=''>
        <Input
          action={setData}
          name='media_link'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Описание тура' comment=''>
        <TextEditor
          action={setData}
          name='hotel_name'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Главные впечатления' comment=''>
        <TextArea
          action={setData}
          name='main_impressions'
          label=''
          old_data={data}
          rows='7'
        />
      </SingleWrapper>

      <SingleWrapper label='Чем мы займемся в туре' comment=''>
        <TextEditor
          action={setData}
          name='tour_activities'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <Button active={true} action={handleButtonSubmit} />
      {/* <Button active={completed} /> */}
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
})(Gallery)
