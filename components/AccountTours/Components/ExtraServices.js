import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import TextEditor from '../FormFields/TextEditor'
import TextArea from '../FormFields/TextArea'
import SelectInput from '../FormFields/SelectInput'
import Button from './Button'

import { connect } from 'react-redux'
import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import { updateTour } from '../../../redux/actions/toursActions'

const ExtraServices = ({
  action,
  toursTypes,
  secondary_nav,
  setSecondaryNav,
  updateTour,
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
    setCompleted(true)
    let arr = secondary_nav
    setSecondaryNav(
      arr.map(item => {
        if (item.value === 'services') {
          return {
            ...item,
            active: true,
          }
        } else {
          return item
        }
      })
    )
  }, [])

  const handleButtonSubmit = () => {
    // updateTour(data)
    action('important')
  }

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Доп. услуги</h4>
      </div>

      <SingleWrapper label='Дополнительно (необязательно)' comment=''>
        <TextEditor
          action={handleInput}
          name='extra_text'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <DoubleWrapper
        ratio='2-3'
        comment='Добавляйте доплату за одноместное размещение и другие услуги. Информация будет предложена клиентам перед оплатой. '
      >
        <Input
          action={handleInput}
          name='extra_service_price'
          label='Услуги (необязательно)'
          old_data={data}
          // type=''
          // multiple
        />
        <SelectInput
          action={handleInput}
          name='extra_currency'
          label=''
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </DoubleWrapper>

      <Button
        active={true}
        action={handleDayAdd}
        color='button-primary'
        text='Добавить услугу'
      />

      <SingleWrapper label='Комментарий' comment=''>
        <TextArea
          action={handleInput}
          name='extra_comment'
          label=''
          old_data={data}
          rows='7'
        />
      </SingleWrapper>

      <Button active={true} action={handleButtonSubmit} />
      {/* <Button active={completed} /> */}
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  secondary_nav: state.tourSection.secondary_nav,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
})(ExtraServices)
