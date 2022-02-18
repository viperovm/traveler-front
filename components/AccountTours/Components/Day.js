import React, { useEffect, useState } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import FileInput from '../FormFields/FileInput'
import TextEditor from '../FormFields/TextEditor'
import Button from './Button'

import { addDay } from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'


const Day = ({ id, action, current_tour, addDay }) => {
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
    setData({
      ...data,
      [name]: value,
    })
  }

  useEffect(() => {
    setData({
      ...data,
      day_id: id,
    })
  }, [])

  useEffect(() => {
    action(data, id)
  }, [data])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SingleWrapper
        label={`День ${id}`}
        comment={
          <div>
            <p>
              Заполните описание каждого дня путешествия в отдельной ячейке.
            </p>
            <p>
              Количество дней в описании должно совпадать с количеством дней в
              туре.
            </p>
            <p>
              Исключение составляют путешествия следующих типов: арт,
              горнолыжный, йога, мама и малыш, серфинг, фитнес.
            </p>
          </div>
        }
      >
        <Input
          action={handleInput}
          name='name'
          value={data && data.name}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Локация' comment=''>
        <Input
          action={handleInput}
          name='location'
          value={data && data.location}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Описание дня' comment=''>
        <TextEditor
          action={handleInput}
          name='description'
          value={data && data.description}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Добавить фото'
        comment='Вы можете добавить до 3 фото для каждого дня'
      >
        <FileInput
          action={handleInput}
          name='day_photo'
          type='file'
          max={3}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
    </>
  )
}

const mapStateToProps = state => ({
  
  current_tour: state.tours.current_tour,
  
})

export default connect(mapStateToProps, { addDay })(Day)
