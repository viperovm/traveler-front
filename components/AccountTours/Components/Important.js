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


const Important = ({
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
        data.guest_requirements &&
        data.important_comments
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

  }, [data])

  const handleButtonSubmit = () => {
    // updateTour(data)
    action('photos')
  }

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Важно знать</h4>
      </div>

      <SingleWrapper label='Требования к гостю' comment=''>
        <TextEditor
          action={handleInput}
          name='guest_requirements'
          old_data={data}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Комментарии' comment=''>
        <TextEditor
          action={handleInput}
          name='important_comments'
          old_data={data}
          // options={toursTypes}
          // multiple
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
})(Important)
