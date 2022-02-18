import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import FileInput from '../FormFields/FileInput'
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
  updateTourWallpaper,
} from '../../../redux/actions/toursActions'
import {
  setActiveSections,
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import Modal from './Modal'

const Common = ({
  action,
  tour,
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
  updateTourWallpaper,
  tourName,
}) => {
  const [data, setData] = useState({})
  const [wp, setWP] = useState({})
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


  // const handleName = (name, value) => {
  //   setTourName(value)
  // }

  // useEffect(() => {
  //   if (tourName) {
  //     setData({
  //       ...data,
  //       name: tourName,
  //     })
  //   }
  // }, [tourName])

  useEffect(() => {
    if (tour) {
      setData({
        additional_types: tour.additional_types,
        basic_type: tour.basic_type,
        direct_link: tour.direct_link,
        finish_city: tour.finish_city,
        finish_country: tour.finish_country,
        finish_region: tour.finish_region,
        finish_russian_region: tour.finish_russian_region,
        finish_time: tour.finish_time,
        name: tour.name,
        start_city: tour.start_city,
        start_country: tour.start_country,
        start_region: tour.start_region,
        start_russian_region: tour.start_russian_region,
        start_time: tour.start_time,
      })
      setWP({
        wallpaper: tour.wallpaper,
      })
    }
  }, [tour])

  useEffect(() => {
    getRegions()
  }, [])

  const handleInput = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }
  const handleWallpaperInput = value => {
    updateTourWallpaper(value, tour.id)
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
  }, [data])

  const handleButtonSubmit = () => {
    updateTour(data, tour.id)
    action('prices')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //  useEffect(() => {
  //    window.scrollIntoView({ behavior: 'smooth' })
  //  }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Общее</h4>
      </div>
      <SingleWrapper label='Название тура' comment='Максимум 50 символов'>
        <Input action={handleInput} name='name' value={data && data.name} />
      </SingleWrapper>
      <SingleWrapper label='Обложка тура' comment=''>
        <FileInput
          action={handleWallpaperInput}
          name='wallpaper'
          max={1}
          value={wp && wp.wallpaper}
        />
      </SingleWrapper>

      <SingleWrapper label='Основной тип тура' comment=''>
        <SelectInput
          action={handleInput}
          name='basic_type'
          label='Основной тип тура'
          val={data && data.basic_type}
          options={toursTypes}
        />
      </SingleWrapper>

      <SingleWrapper
        label='Дополнительные типы тура'
        comment='Основной тип тура отображается в карточке тура в каталоге. Все возможные типы туров вы можете посмотреть здесь'
      >
        <SelectInput
          action={handleInput}
          name='additional_types'
          label='Дополнительные типы тура'
          comment=''
          val={data && data.additional_types}
          options={toursTypes}
          multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Регион начала тура' comment=''>
        <SelectInput
          action={handleInput}
          name='start_region'
          label='Регион начала тура'
          comment=''
          val={data && data.start_region}
          options={regions}
          // multiple
        />
      </SingleWrapper>
      {startCountrySet && (
        <SingleWrapper label='Страна начала тура' comment=''>
          <SelectInput
            action={handleInput}
            name='start_country'
            label='Страна начала тура'
            comment=''
            val={data && data.start_country}
            options={countries}
            // multiple
          />
        </SingleWrapper>
        // <DoubleWrapper ratio='2-3'>
        //   <SelectInput
        //     action={handleInput}
        //     name='start_country'
        //     label='Страна начала тура'
        //     comment=''
        //     value={data}
        //     options={countries}
        //     // multiple
        //   />
        //   <Modal title='Добавить страну' disabled={data.start_country == 1} search_data='countries' search_id=''/>
        // </DoubleWrapper>
      )}
      {startRussianRegionSet && (
        <SingleWrapper
          label='Российский регион начала тура'
          comment='Для путешествий по России не забудьте добавить регион, чтобы ваш тур попал в соответсвующий фильтр на сайте.'
        >
          <SelectInput
            action={handleInput}
            name='start_russian_region'
            label='Российский регион начала тура'
            comment=''
            val={data && data.start_russian_region}
            options={russianRegions}
            // multiple
          />
        </SingleWrapper>
      )}
      {startCitySet && (
        <SingleWrapper label='Город начала тура' comment=''>
          <SelectInput
            action={handleInput}
            name='start_city'
            label='Город начала тура'
            comment=''
            val={data && data.start_city}
            options={cities}
            // multiple
          />
        </SingleWrapper>
      )}
      <SingleWrapper label='Регион окончания тура' comment=''>
        <SelectInput
          action={handleInput}
          name='finish_region'
          label='Регион окончания тура'
          comment=''
          val={data && data.finish_region}
          options={regions}
          // multiple
        />
      </SingleWrapper>
      {finishCountrySet && (
        <SingleWrapper label='Страна окончания тура' comment=''>
          <SelectInput
            action={handleInput}
            name='finish_country'
            label='Страна окончания тура'
            comment=''
            val={data && data.finish_country}
            options={countries}
            // multiple
          />
        </SingleWrapper>
      )}
      {finishRussianRegionSet && (
        <SingleWrapper label='Российский регион окончания тура' comment=''>
          <SelectInput
            action={handleInput}
            name='finish_russian_region'
            label='Российский регион окончания тура'
            comment=''
            val={data && data.finish_russian_region}
            options={russianRegions}
            // multiple
          />
        </SingleWrapper>
      )}
      {finishCitySet && (
        <SingleWrapper label='Город окончания тура' comment=''>
          <SelectInput
            action={handleInput}
            name='finish_city'
            label='Город окончания тура'
            comment=''
            val={data && data.finish_city}
            options={cities}
            // multiple
          />
        </SingleWrapper>
      )}

      <SingleWrapper label='Время начала (местное):' comment=''>
        <Input
          action={handleInput}
          name='start_time'
          value={data && data.start_time}
          type='time'
        />
      </SingleWrapper>

      <SingleWrapper label='Время окончания тура (местное)' comment=''>
        <Input
          action={handleInput}
          name='finish_time'
          value={data && data.finish_time}
          type='time'
        />
      </SingleWrapper>

      <CheckboxInput
        action={handleInput}
        name='direct_link'
        label='Доступ к туру только по прямой ссылке'
        comment='Выбор этой опции уберет ваш тур из выдачи на сайте. Подходит для заказов на индивидуальные программы '
        value={data && data.direct_link}
      />
      <Button active={true} action={handleButtonSubmit} />
      {/* <Button active={completed} action={handleButtonSubmit} /> */}
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
  tourName: state.tourSection.tour_name,
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
  updateTourWallpaper,
})(Common)
