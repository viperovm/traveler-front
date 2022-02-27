import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'

import { connect } from 'react-redux'
import {
  updateTour,
  getCurrencies,
} from '../../../redux/actions/toursActions'
import { update_tour } from '../../../redux/actions/currentTourActions'
import { setSecondaryNav } from '../../../redux/actions/tourSectionActions'

const Prices = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  getCurrencies,
  currencies,
  update_tour,
}) => {
  // const [data, setData] = useState()
  const [completed, setCompleted] = useState(false)
  const [checkBox, setCheckBox] = useState(true)
  const [input, setInput] = useState(true)

  const handleInput = (name, value) => {
    update_tour(name, value)
  }

  useEffect(() => {
    if (tour) {
      if (tour.currency && tour.start_date && tour.finish_date && tour.price) {
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
  }, [tour])

  const handleButtonBack = () => {
    // updateTour(data, tour.id)
    action('common')
  }
  const handleButtonSubmit = () => {
    updateTour(tour, tour.id)
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
        value={tour && tour.instant_booking}
      />

      <SingleWrapper label='Валюта тура' comment=''>
        <SelectInput
          action={handleInput}
          name='currency'
          label='Валюта тура'
          val={tour && tour.currency}
          options={currencies}
        />
      </SingleWrapper>

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='start_date'
          label='Дата начала тура'
          value={tour && tour.start_date}
          type='date'
          // multiple
        />
        <Input
          action={handleInput}
          name='finish_date'
          label='Дата завершения тура'
          value={tour && tour.finish_date}
          type='date'

          // multiple
        />
      </DoubleWrapper>
      {/* <CheckboxInput
        action={handleInput}
        name='week_recurrent'
        label='Повторять каждую неделю'
        comment=''
        value={tour && tour.week_recurrent}
      />
      <CheckboxInput
        action={handleInput}
        name='month_recurrent'
        label='Повторять каждый месяц'
        comment=''
        value={tour && tour.month_recurrent}
      /> */}
      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='vacants_number'
          label='Осталось мест'
          value={tour && tour.vacants_number}
          // type='date'
          // multiple
        />
        <Input
          action={handleInput}
          name='members_number'
          label='Всего мест'
          value={tour && tour.members_number}
          // type='date'

          // multiple
        />
      </DoubleWrapper>

      <SingleWrapper label='Стоимость' comment=''>
        <Input
          action={handleInput}
          name='price'
          label='Стоимость'
          value={tour && tour.price}
        />
      </SingleWrapper>
      <SingleWrapper label='Комментарий к стоимости' comment=''>
        <Input
          action={handleInput}
          name='price_comment'
          label='Комментарий к стоимости'
          value={tour && tour.price_comment}
        />
      </SingleWrapper>

      <DoubleWrapper ratio='2-3'>
        <Input
          action={handleInput}
          name='prepay_amount'
          label='Предоплата'
          value={tour && tour.prepay_amount}
          // type='date'
          // multiple
        />
        <SelectInput
          action={handleInput}
          name='prepay_in_prc'
          label='Номинал'
          value={tour && tour.prepay_in_prc}
          options={[
            { id: 0, name: 'Число' },
            { id: 1, name: '%' },
          ]}
          // multiple
        />
      </DoubleWrapper>

      <DoubleWrapper ratio='2-3'>
        <Input
          action={handleInput}
          name='discount'
          label='Размер скидки'
          value={tour && tour.discount}
          // type='date'
          // multiple
        />
        <SelectInput
          action={handleInput}
          name='discount_in_prc'
          label='Номинал'
          value={tour && tour.discount_in_prc}
          options={[
            { id: 0, name: 'Число' },
            { id: 1, name: '%' },
          ]}
          // multiple
        />
      </DoubleWrapper>

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='discount_starts'
          label='Скидка действует с:'
          value={tour && tour.discount_starts}
          type='date'
          // multiple
        />
        <Input
          action={handleInput}
          name='discount_finish'
          label='Скидка действует до:'
          value={tour && tour.discount_finish}
          type='date'

          // multiple
        />
      </DoubleWrapper>
      {tour && !tour.postpay_days_before_start && (
        <CheckboxInput
          action={handleInput}
          name='postpay_on_start_day'
          label='Постоплата в день старта'
          comment=''
          value={tour && tour.postpay_on_start_day}
        />
      )}

      {tour && !tour.postpay_on_start_day && (
        <SingleWrapper label='Вносится за дней до старта ' comment=''>
          <Input
            action={handleInput}
            name='postpay_days_before_start'
            label='Вносится за дней до старта'
            value={tour && tour.postpay_days_before_start}
          />
        </SingleWrapper>
      )}

      <CheckboxInput
        action={handleInput}
        name='is_guaranteed'
        label='Тур гарантирован'
        comment='
“Тур гарантирован“ означает, что он точно состоится и дополнительного подтверждения с вашей стороны не требуется. Отмена гарантированного тура после получения предоплаты влечет начисление штрафа (см. раздел VI. Изменение бронирования, отмена и возврат)
'
        value={tour && tour.is_guaranteed}
      />
      <CheckboxInput
        action={handleInput}
        name='flight_included'
        label='В стоимость включен перелёт'
        comment=''
        value={tour && tour.flight_included}
      />
      <CheckboxInput
        action={handleInput}
        name='scouting'
        label='Разведка'
        comment=''
        value={tour && tour.scouting}
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
  secondary_nav: state.tourSection.secondary_nav,
  currencies: state.tours.currencies,
  tour: state.local_tour.tour,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
  getCurrencies,
  update_tour,
})(Prices)
