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
  updateTour,
  getCurrencies,
} from '../../../redux/actions/toursActions'
import { setSecondaryNav } from '../../../redux/actions/tourSectionActions'
import TrippleWrapper from '../Wrappers/TrippleWrapper'

const Prices = ({
  tour,
  action,
  toursTypes,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  getCurrencies,
  currencies,
}) => {
  const [data, setData] = useState()
  const [completed, setCompleted] = useState(false)

  const handleInput = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  const handlePrcInput = (name, value) => {

    if(value === '%') {
      setData({
        ...data,
        [name]: true,
      })
    } else {
      setData({
        ...data,
        [name]: false,
      })
    }
  }

  console.log(currencies)

  useEffect(() => {
    if (tour) {
      setData({
        instant_booking: tour.instant_booking,
        currency: tour.currency,
        start_date: tour.start_date,
        finish_date: tour.finish_date,
        week_recurrent: tour.week_recurrent,
        month_recurrent: tour.month_recurrent,
        vacants_number: tour.vacants_number,
        members_number: tour.members_number,
        price: tour.price,
        price_comment: tour.price_comment,
        prepay_amount: tour.prepay_amount,
        prepay_in_prc: tour.prepay_in_prc,
        prepay_currency: tour.prepay_currency,
        prepay_starts: tour.prepay_starts,
        prepay_finish: tour.prepay_finish,
        postpay_on_start_day: tour.postpay_on_start_day,
        postpay_days_before_start: tour.postpay_days_before_start,
        is_guaranteed: tour.is_guaranteed,
        flight_included: tour.flight_included,
        scouting: tour.scouting,
      })
    }
  }, [tour])

  useEffect(() => {
    if (data) {
      if (data.currency && data.start_date && data.finish_date && data.price) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'prices') {
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
            if (item.value === 'prices') {
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
    action('options')
  }

  useEffect(() => {
    getCurrencies()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Цены и даты</h4>
      </div>
      <CheckboxInput
        action={handleInput}
        name='instant_booking'
        label='Возможно моментальное бронирование'
        comment='Если вы выбираете моментальное бронирование - оплата с клиента будет списываться в момент бронирования без вашего подтверждения. '
        value={data && data.instant_booking}
      />

      <SingleWrapper label='Валюта тура' comment=''>
        <SelectInput
          action={handleInput}
          name='currency'
          label='Валюта тура'
          val={data && data.currency}
          options={currencies}
        />
      </SingleWrapper>

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='start_date'
          label='Дата начала тура'
          value={data && data.start_date}
          type='date'
          // multiple
        />
        <Input
          action={handleInput}
          name='finish_date'
          label='Дата завершения тура'
          value={data && data.finish_date}
          type='date'

          // multiple
        />
      </DoubleWrapper>
      <CheckboxInput
        action={handleInput}
        name='week_recurrent'
        label='Повторять каждую неделю'
        comment=''
        value={data && data.week_recurrent}
      />
      <CheckboxInput
        action={handleInput}
        name='month_recurrent'
        label='Повторять каждый месяц'
        comment=''
        value={data && data.month_recurrent}
      />
      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='vacants_number'
          label='Осталось мест'
          value={data && data.vacants_number}
          // type='date'
          // multiple
        />
        <Input
          action={handleInput}
          name='members_number'
          label='Всего мест'
          value={data && data.members_number}
          // type='date'

          // multiple
        />
      </DoubleWrapper>

      <SingleWrapper label='Стоимость' comment=''>
        <Input
          action={handleInput}
          name='price'
          label='Стоимость'
          value={data && data.price}
        />
      </SingleWrapper>
      <SingleWrapper label='Комментарий к стоимости' comment=''>
        <Input
          action={handleInput}
          name='price_comment'
          label='Комментарий к стоимости'
          value={data && data.price_comment}
        />
      </SingleWrapper>

      <TrippleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='prepay_amount'
          label='Предоплата'
          value={data && data.prepay_amount}
          // type='date'
          // multiple
        />
        <SelectInput
          action={handlePrcInput}
          name='prepay_in_prc'
          label='Номинал'
          value={data && data.prepay_in_prc}
          options={[{id: 0, name: 'Число'}, { id: 1, name: '%' } ]}
          // multiple
        />
        <SelectInput
          action={handleInput}
          name='prepay_currency'
          label='Валюта'
          value={data && data.prepay_currency}
          options={currencies}
          // multiple
        />
      </TrippleWrapper>

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='prepay_starts'
          label='Действует с:'
          value={data && data.prepay_starts}
          type='date'
          // multiple
        />
        <Input
          action={handleInput}
          name='prepay_finish'
          label='Действует до:'
          value={data && data.prepay_finish}
          type='date'

          // multiple
        />
      </DoubleWrapper>
      <CheckboxInput
        action={handleInput}
        name='postpay_on_start_day'
        label='Постоплата в день старта'
        comment=''
        value={data && data.postpay_on_start_day}
      />

      <SingleWrapper label='Вносится за дней до старта ' comment=''>
        <Input
          action={handleInput}
          name='postpay_days_before_start'
          label='Вносится за дней до старта '
          value={data && data.postpay_days_before_start}
        />
      </SingleWrapper>

      <CheckboxInput
        action={handleInput}
        name='is_guaranteed'
        label='Тур гарантирован'
        comment='
“Тур гарантирован“ означает, что он точно состоится и дополнительного подтверждения с вашей стороны не требуется. Отмена гарантированного тура после получения предоплаты влечет начисление штрафа (см. раздел VI. Изменение бронирования, отмена и возврат)
'
        value={data && data.is_guaranteed}
      />
      <CheckboxInput
        action={handleInput}
        name='flight_included'
        label='В стоимость включен перелёт'
        comment=''
        value={data && data.flight_included}
      />
      <CheckboxInput
        action={handleInput}
        name='scouting'
        label='Разведка'
        comment=''
        value={data && data.scouting}
      />
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
  currencies: state.tours.currencies,
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
  getCurrencies,
})(Prices)
