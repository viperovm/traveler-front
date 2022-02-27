import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import TextArea from '../FormFields/TextArea'
import Button from './Button'

import { connect } from 'react-redux'
import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import { updateTour } from '../../../redux/actions/toursActions'
import { update_tour } from '../../../redux/actions/currentTourActions'

const Cancellation = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  update_tour,
}) => {
  // const [data, setData] = useState()
  const [completed, setCompleted] = useState(false)

  const handleInput = (name, value) => {
    update_tour(name, value)
  }

  useEffect(() => {
    if (tour) {
      if (tour.cancellation_terms) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'options') {
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
            if (item.value === 'options') {
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
    action('details')
  }

  const handleButtonBack = () => {
    action('prices')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          value={tour && tour.cancellation_terms}
          rows='7'
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
  secondary_nav: state.tourSection.secondary_nav,
  tour: state.local_tour.tour,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
  update_tour,
})(Cancellation)
