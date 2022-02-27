import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'

import TextArea from '../FormFields/TextArea'

import Button from './Button'

import { connect } from 'react-redux'

import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import { updateTour } from '../../../redux/actions/toursActions'

const Conditions = ({ action, secondary_nav, setSecondaryNav, updateTour, tour }) => {
  const [data, setData] = useState()
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if(tour){
      setData({
        price_includes: tour.price_includes,
        price_excludes: tour.price_excludes,
        air_tickets: tour.air_tickets,
      })
    }
  }, [tour])

  const handleInput = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  useEffect(() => {
    if (data) {
      if (data.price_includes && data.price_excludes && data.air_tickets) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'conditions') {
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
            if (item.value === 'conditions') {
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
    action('services')
  }

  const handleButtonBack = () => {
    action('leader')
  }

   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Условия</h4>
      </div>

      <SingleWrapper label='В стоимость включено' comment=''>
        <TextArea
          action={handleInput}
          name='price_includes'
          label=''
          value={data&& data.price_includes}
          rows='7'
        />
      </SingleWrapper>
      <SingleWrapper label='В стоимость не включено' comment=''>
        <TextArea
          action={handleInput}
          name='price_excludes'
          label=''
          value={data&& data.price_excludes}
          rows='7'
        />
      </SingleWrapper>
      <SingleWrapper label='Авиабилеты' comment=''>
        <TextArea
          action={handleInput}
          name='air_tickets'
          label=''
          value={data&& data.air_tickets}
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
  secondary_nav: state.tourSection.secondary_nav,
  tour: state.local_tour.tour,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
})(Conditions)
