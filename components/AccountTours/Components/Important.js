import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import RadioInput from '../FormFields/RadioInput'
import TextEditor from '../FormFields/TextEditor'
import TextArea from '../FormFields/TextArea'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'

import { connect } from 'react-redux'

import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'
import { updateTour } from '../../../redux/actions/toursActions'


const Important = ({ tour, action, secondary_nav, setSecondaryNav, updateTour }) => {
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
      if (data.guest_requirements && data.important_comments) {
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
  }, [data])

  const handleButtonSubmit = () => {
    updateTour(data, tour.id)
    action('photos')
  }

  const handleButtonBack = () => {
    action('conditions')
  }

   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Важно знать</h4>
      </div>

      <SingleWrapper label='Требования к гостю' comment=''>
        <TextEditor
          action={handleInput}
          name='guest_requirements'
          value={data}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Комментарии' comment=''>
        <TextEditor
          action={handleInput}
          name='important_comments'
          value={data}
          // options={toursTypes}
          // multiple
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
})(Important)
