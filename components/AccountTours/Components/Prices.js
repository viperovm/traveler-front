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
import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import TrippleWrapper from '../Wrappers/TrippleWrapper'

const Prices = ({
  action,
  toursTypes,
  secondary_nav,
  setSecondaryNav,
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
    if (data) {
      if (
        data.instant_booking &&
        data.currency &&
        data.start_date &&
        data.finish_date &&
        data.week_recurrent &&
        data.month_recurrent &&
        data.vacants_number &&
        data.members_number &&
        data.price &&
        data.price_comment &&
        data.prepay_amount &&
        data.prepay_in_prc &&
        data.prepay_currency &&
        data.prepay_starts &&
        data.prepay_finish &&
        data.postpay_on_start_day &&
        data.postpay_days_before_start &&
        data.is_guaranteed &&
        data.flight_included &&
        data.scouting
      ) {
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
    // updateTour(data)
    action('options')
  }

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
        old_data={data}
      />

      <SingleWrapper label='Валюта тура' comment=''>
        <SelectInput
          action={handleInput}
          name='currency'
          label='Валюта тура'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='start_date'
          label='Дата начала тура'
          old_data={data}
          type='date'
          // multiple
        />
        <Input
          action={handleInput}
          name='finish_date'
          label='Дата завершения тура'
          old_data={data}
          type='date'

          // multiple
        />
      </DoubleWrapper>
      <CheckboxInput
        action={handleInput}
        name='week_recurrent'
        label='Повторять каждую неделю'
        comment=''
        old_data={data}
      />
      <CheckboxInput
        action={handleInput}
        name='month_recurrent'
        label='Повторять каждый месяц'
        comment=''
        old_data={data}
      />
      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='vacants_number'
          label='Осталось мест'
          old_data={data}
          // type='date'
          // multiple
        />
        <Input
          action={handleInput}
          name='members_number'
          label='Всего мест'
          old_data={data}
          // type='date'

          // multiple
        />
      </DoubleWrapper>

      <SingleWrapper label='Стоимость' comment=''>
        <Input
          action={handleInput}
          name='price'
          label='Стоимость'
          old_data={data}
        />
      </SingleWrapper>
      <SingleWrapper label='Комментарий к стоимости' comment=''>
        <Input
          action={handleInput}
          name='price_comment'
          label='Комментарий к стоимости'
          old_data={data}
        />
      </SingleWrapper>

      <TrippleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='prepay_amount'
          label='Предоплата'
          old_data={data}
          // type='date'
          // multiple
        />
        <SelectInput
          action={handleInput}
          name='prepay_in_prc'
          label='%'
          old_data={data}
          options={toursTypes}
          // multiple
        />
        <SelectInput
          action={handleInput}
          name='prepay_currency'
          label='Валюта'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </TrippleWrapper>

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='prepay_starts'
          label='Действует с:'
          old_data={data}
          type='date'
          // multiple
        />
        <Input
          action={handleInput}
          name='prepay_finish'
          label='Действует до:'
          old_data={data}
          type='date'

          // multiple
        />
      </DoubleWrapper>
      <CheckboxInput
        action={handleInput}
        name='postpay_on_start_day'
        label='Постоплата в день старта'
        comment=''
        old_data={data}
      />

      <SingleWrapper label='Вносится за дней до старта ' comment=''>
        <Input
          action={handleInput}
          name='postpay_days_before_start'
          label='Вносится за дней до старта '
          old_data={data}
        />
      </SingleWrapper>

      <CheckboxInput
        action={handleInput}
        name='is_guaranteed'
        label='Тур гарантирован'
        comment='
“Тур гарантирован“ означает, что он точно состоится и дополнительного подтверждения с вашей стороны не требуется. Отмена гарантированного тура после получения предоплаты влечет начисление штрафа (см. раздел VI. Изменение бронирования, отмена и возврат)
'
        old_data={data}
      />
      <CheckboxInput
        action={handleInput}
        name='flight_included'
        label='В стоимость включен перелёт'
        comment=''
        old_data={data}
      />
      <CheckboxInput
        action={handleInput}
        name='scouting'
        label='Разведка'
        comment=''
        old_data={data}
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
})

export default connect(mapStateToProps, {
  setTourName,
  getTourTypes,
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
  setSecondaryNav,
})(Prices)
