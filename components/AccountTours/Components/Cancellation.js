import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import TextArea from '../FormFields/TextArea'
import Button from './Button'

import { connect } from 'react-redux'
import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'

const Cancellation = ({
  action,
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
        data.cancellation_terms
      ) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'cancellation') {
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
            if (item.value === 'cancellation') {
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
    action('details')
  }

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Условия отмены</h4>
      </div>

      <SingleWrapper
        label='Укажите свои условия отмены:*'
        comment='Расскажите клиентам, какая у вас политика возвратов. Какая сумма вернется пользователю в случае отмены по инициативе путешественника? Обратите внимание, что сервисный сбор платит тревел-эксперт и он является фактически понесенными расходами.'
      >
        <TextArea
          action={handleInput}
          name='cancellation_terms'
          label=''
          old_data={data}
          rows='7'
        />
      </SingleWrapper>
      <Button active={true} action={handleButtonSubmit} />
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  secondary_nav: state.tourSection.secondary_nav,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
})(Cancellation)
