import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import NameInput from '../FormFields/NameInput'
import FileInput from '../FormFields/FileInput'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'

import { connect } from 'react-redux'
import { setTourName } from '../../../redux/actions/tourSectionActions'
import { update_tour } from '../../../redux/actions/currentTourActions'
import {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
} from '../../../redux/actions/toursActions'
import {
  setActiveSections,
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import Modal from './Modal'
import StartPlace from './StartPlace'
import FinishPlace from './FinishPlace'

const Common = ({
  action,
  tour,
  toursTypes,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  updateTourWallpaper,
  update_tour,
}) => {
  const [data, setData] = useState({})
  const [wp, setWP] = useState({})

  const [completed, setCompleted] = useState(false)


  console.log(tour)

 
  const handleInput = (name, value) => {
    update_tour(name, value)
  }
  const handleWallpaperInput = value => {
    updateTourWallpaper(value, tour.id)
  }

  const handleNameInput = () => {
    updateTour(tour, tour.id)
  }

  useEffect(() => {
    if (tour) {
      if (
        tour.name &&
        tour.basic_type &&
        tour.additional_types &&
        tour.start_city &&
        tour.finish_city &&
        tour.start_time &&
        tour.finish_time
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
  }, [tour])

  const handleButtonSubmit = () => {
    updateTour(tour, tour.id)
    action('prices')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Общее</h4>
      </div>
      <SingleWrapper label='Название тура' comment='Максимум 50 символов'>
        <NameInput
          action={handleInput}
          action2={handleNameInput}
          name='name'
          value={tour && tour.name}
        />
      </SingleWrapper>
      <SingleWrapper label='Обложка тура' comment=''>
        <FileInput
          action={handleWallpaperInput}
          name='wallpaper'
          max={1}
          value={tour && tour.tmb_wallpaper}
        />
      </SingleWrapper>

      <SingleWrapper label='Основной тип тура' comment=''>
        <SelectInput
          action={handleInput}
          name='basic_type'
          label='Основной тип тура'
          val={tour && tour.basic_type}
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
          val={tour && tour.additional_types}
          options={toursTypes}
          multiple
        />
      </SingleWrapper>

      <StartPlace
        action={handleInput}
        start_region={tour && tour.start_region}
        start_country={tour && tour.start_country}
        start_russian_region={tour && tour.start_russian_region}
        start_city={tour && tour.start_city}
      />
      <FinishPlace
        action={handleInput}
        finish_region={tour && tour.finish_region}
        finish_country={tour && tour.finish_country}
        finish_russian_region={tour && tour.finish_russian_region}
        finish_city={tour && tour.finish_city}
      />

      {/* <SingleWrapper label='Регион начала тура' comment=''>
        <SelectInput
          action={handleInput}
          name='start_region'
          label='Регион начала тура'
          comment=''
          val={tour && tour.start_region}
          options={dateSelectData.region}
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
            val={tour && tour.start_country}
            options={dateSelectData.start_country}
            // multiple
          />
        </SingleWrapper>
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
            val={tour && tour.start_russian_region}
            options={dateSelectData.start_russian_region}
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
            val={tour && tour.start_city}
            options={dateSelectData.start_city}
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
          val={tour && tour.finish_region}
          options={dateSelectData.region}
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
            val={tour && tour.finish_country}
            options={dateSelectData.finish_country}
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
            val={tour && tour.finish_russian_region}
            options={dateSelectData.finish_russian_region}
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
            val={tour && tour.finish_city}
            options={dateSelectData.finish_city}
            // multiple
          />
        </SingleWrapper>
      )} */}

      <SingleWrapper label='Время начала (местное):' comment=''>
        <Input
          action={handleInput}
          name='start_time'
          value={tour && tour.start_time}
          type='time'
        />
      </SingleWrapper>

      <SingleWrapper label='Время окончания тура (местное)' comment=''>
        <Input
          action={handleInput}
          name='finish_time'
          value={tour && tour.finish_time}
          type='time'
        />
      </SingleWrapper>

      <CheckboxInput
        action={handleInput}
        name='direct_link'
        label='Доступ к туру только по прямой ссылке'
        comment='Выбор этой опции уберет ваш тур из выдачи на сайте. Подходит для заказов на индивидуальные программы '
        value={tour && tour.direct_link}
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
  russian_regions: state.tours.russian_regions,
  cities: state.tours.cities,
  secondary_nav: state.tourSection.secondary_nav,
  tourName: state.tourSection.tour_name,
  tour: state.local_tour.tour,
})

export default connect(mapStateToProps, {
  setTourName,
  getTourTypes,
  setSecondaryNav,
  updateTour,
  updateTourWallpaper,
  update_tour,
})(Common)
