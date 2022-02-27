import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import FileInput from '../FormFields/FileInput'
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
} from '../../../redux/actions/toursActions'
import {
  setActiveSections,
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import Modal from './Modal'
import TrippleWrapper from '../Wrappers/TrippleWrapper'

const Leader = ({
  tour,
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
  updateTour,
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
    updateTour(data, tour.id )
    action('conditions')
  }

  const handleButtonBack = () => {
    action('day')
  }


   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Турлидер</h4>
      </div>

      <SingleWrapper
        label='Выберите гида из списка, либо укажите его данные ниже'
        comment={
          <div>
            <p>
              Путешественники очень расстраиваются, когда вместо обещанного гида
              видят другого.
            </p>
            <p>
              Путешественники очень расстраиваются, когда вместо обещанного гида
              видят другого. Пожалуйста, добавляйте актуальную информацию о том,
              кто будет сопровождать группу.
            </p>
            <p>
              Можно выбрать из выпадающего списка ИЛИ внести информацию в полях
              ниже.
            </p>
          </div>
        }
      >
        <SelectInput
          action={handleInput}
          name='team_member'
          label='Выберите гида из списка, либо укажите его данные ниже'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Имя гида' comment=''>
        <Input
          action={handleInput}
          name='leader_name'
          old_data={data}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Информация о гиде' comment=''>
        <TextEditor
          action={handleInput}
          name='leader_info'
          old_data={data}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Фотография гида' comment=''>
        <FileInput
          action={handleInput}
          name='leader_photo'
          old_data={data}
          type='file'
          // options={toursTypes}
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
  tour: state.local_tour.tour,
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
})(Leader)
