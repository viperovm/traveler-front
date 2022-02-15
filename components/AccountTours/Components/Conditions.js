import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'

import TextArea from '../FormFields/TextArea'

import Button from './Button'

import { connect } from 'react-redux'

import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import { updateTour } from '../../../redux/actions/toursActions'

const Conditions = ({ action, secondary_nav, setSecondaryNav, updateTour }) => {
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
    // updateTour(data)
    action('services')
  }

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
          old_data={data}
          rows='7'
        />
      </SingleWrapper>
      <SingleWrapper label='В стоимость не включено' comment=''>
        <TextArea
          action={handleInput}
          name='price_excludes'
          label=''
          old_data={data}
          rows='7'
        />
      </SingleWrapper>
      <SingleWrapper label='Авиабилеты' comment=''>
        <TextArea
          action={handleInput}
          name='air_tickets'
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
  secondary_nav: state.tourSection.secondary_nav,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
})(Conditions)
