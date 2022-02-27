import React, { useEffect, useState } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import FileInput from '../FormFields/FileInput'
import TextEditor from '../FormFields/TextEditor'
import Button from './Button'

import { addActivity } from '../../../redux/actions/toursActions'
import { updateActivity } from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'

const Activity = ({ id, action, activity, updateActivity }) => {
  const [data, setData] = useState({})

  // useEffect(() => {
  //   if (day) {
  //     setData({
  //       name: day.name,
  //       location: day.location,
  //       description: day.description,
  //     })
  //   }
  // }, [day])

  const handleInput = (name, value) => {
      let data = { [name]: value }
      updateActivity(id, data)
  }

//   useEffect(() => {
//     setData({
//       ...data,
//       day_id: id,
//     })
//   }, [])

//   useEffect(() => {
//     action(data, id)
//   }, [data])

  return (
    <>
      <SingleWrapper label='Чем мы займемся в туре' comment=''>
        <TextEditor
          action={handleInput}
          name='description'
          value={activity && activity.description}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper
        label='Добавить фото'
        comment='Вы можете добавить 1 фото для каждой активности'
      >
        <FileInput
          action={handleInput}
          name='image'
          type='file'
          max={1}
          value={activity && activity.image}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.local_tour.tour,
})

export default connect(mapStateToProps, { updateActivity })(Activity)
