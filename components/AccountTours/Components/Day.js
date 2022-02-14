import React, { useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import TextEditor from '../FormFields/TextEditor'
import Button from './Button'


const Day = ({ id, action }) => {
    
  const handleInput = (name, value) => {
    action(name, value)
    }

  console.log(1)

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
            name='day'
            // options={toursTypes}
            // multiple
          />
        </SingleWrapper>
        <SingleWrapper label='Локация' comment=''>
          <Input
            action={handleInput}
            name='location'
            // options={toursTypes}
            // multiple
          />
        </SingleWrapper>
        <SingleWrapper label='Описание дня' comment=''>
          <TextEditor
            action={handleInput}
            name='day_description'
            // options={toursTypes}
            // multiple
          />
        </SingleWrapper>
        <SingleWrapper
          label='Добавить фото'
          comment='Вы можете добавить до 3 фото для каждого дня'
        >
          <Input
            action={handleInput}
            name='day_photo'
            type='file'
            // options={toursTypes}
            // multiple
          />
        </SingleWrapper>
        <SingleWrapper label='Карта маршрута' comment=''>
          <Input
            action={handleInput}
            name='day_route'
            type='file'
            // options={toursTypes}
            // multiple
          />
        </SingleWrapper>
      </>
  )
}

export default Day
