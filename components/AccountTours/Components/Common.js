import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
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
import { setActiveSections, setSecondaryNav } from '../../../redux/actions/tourSectionActions'
import Modal from './Modal'

const Common = ({
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
        setSecondaryNav(arr.map(item => {
          if (item.value === 'common') {
            return {
              ...item,
              active: true,
            }
          } else {
            return item
          }
        }))
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
    action('prices')
  }

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Общее</h4>
      </div>
      <SingleWrapper label='Название тура' comment='Максимум 50 символов'>
        <Input
          action={handleInput}
          name='name'
          old_data={data}
          value={data && data.name}
        />
      </SingleWrapper>

      <SingleWrapper label='Основной тип тура' comment=''>
        <SelectInput
          action={handleInput}
          name='basic_type'
          label='Основной тип тура'
          old_data={data}
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
          old_data={data}
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
          old_data={data}
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
            old_data={data}
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
        //     old_data={data}
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
            old_data={data}
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
            old_data={data}
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
          old_data={data}
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
            old_data={data}
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
            old_data={data}
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
            old_data={data}
            options={cities}
            // multiple
          />
        </SingleWrapper>
      )}

      <SingleWrapper label='Время начала (местное):' comment=''>
        <Input
          action={handleInput}
          name='start_time'
          old_data={data}
          type='time'
        />
      </SingleWrapper>

      <SingleWrapper label='Время окончания тура (местное)' comment=''>
        <Input
          action={handleInput}
          name='finish_time'
          old_data={data}
          type='time'
        />
      </SingleWrapper>

      <CheckboxInput
        action={handleInput}
        name='direct_link'
        label='Доступ к туру только по прямой ссылке'
        comment='Выбор этой опции уберет ваш тур из выдачи на сайте. Подходит для заказов на индивидуальные программы '
        old_data={data}
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
})

export default connect(mapStateToProps, {
  setTourName,
  getTourTypes,
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
  setSecondaryNav,
})(Common)
