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
import { setTourName } from '../../../redux/actions/tourSectionActions'
import {
  getTourTypes,
} from '../../../redux/actions/toursActions'
import {
  setSecondaryNav,
} from '../../../redux/actions/tourSectionActions'

const Details = ({
  action,
  toursTypes,
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
        data.languages &&
        data.difficulty_level &&
        data.difficulty_description &&
        data.comfort_level &&
        data.tour_property_types &&
        data.accomodation &&
        data.hotel_name &&
        data.tour_property_images &&
        data.age_starts &&
        data.age_ends &&
        data.babies_alowed &&
        data.animals_not_exploited &&
        data.media_link &&
        data.description &&
        data.main_impressions &&
        data.plan
      ) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'details') {
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
            if (item.value === 'details') {
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
    action('day')
  }

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Детали</h4>
      </div>

      <SingleWrapper
        label='На каком языке говорят в путешествии'
        comment='Выбирайте только те языки, на которых будут говорить в путешествии '
      >
        <Input action={handleInput} name='languages' label='' old_data={data} />
      </SingleWrapper>
      <RadioInput
        action={handleInput}
        name='difficulty_level'
        label='Укажите сложность программы'
        old_data={data}
        comment='Уровень активности должен соответствовать нагрузкам, которые ожидаются в путешествии. Градацию уровней активности можно посмотреть здесь'
      />
      <SingleWrapper
        label='Кратко опишите в чем заклдючается сложность тура'
        comment=''
      >
        <TextArea
          action={handleInput}
          name='difficulty_description'
          label=''
          old_data={data}
          rows='7'
        />
      </SingleWrapper>
      <RadioInput
        action={handleInput}
        name='comfort_level'
        label='Как вы оцениваете уровень комфорта в путешествии?'
        old_data={data}
        comment='Комфорт - один из главных критериев выбора путешествия. Градацию уровней комфорта можно посмотреть здесь'
      />
      <SingleWrapper label='Где планируется проживание' comment=''>
        <SelectInput
          action={handleInput}
          name='tour_property_types'
          label='Где планируется проживание'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Размещение' comment=''>
        <SelectInput
          action={handleInput}
          name='accomodation'
          label='Размещение'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Название отеля'
        comment='Вводите, если уверены в 100% гарантии размещения '
      >
        <Input
          action={handleInput}
          name='hotel_name'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Добавить фото мест проживания в путешествии'
        comment=''
      >
        <Input
          action={handleInput}
          name='tour_property_images'
          old_data={data}
          options={toursTypes}
          type='file'
          // multiple
        />
      </SingleWrapper>

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='age_starts'
          label='Возраст участников от:'
          old_data={data}
          // type=''
          // multiple
        />
        <Input
          action={handleInput}
          name='age_ends'
          label='Возраст участников до:'
          old_data={data}
          // type='date'

          // multiple
        />
      </DoubleWrapper>

      <CheckboxInput
        action={handleInput}
        name='babies_alowed'
        label='Возможно участие с маленькими детьми'
        comment=''
        old_data={data}
      />
      <CheckboxInput
        action={handleInput}
        name='animals_not_exploited'
        label='В программе не эксплуатируются животные'
        comment='Если в вашей поездке не используется труд животных - можете отметить. Мы это ценим. '
        old_data={data}
      />

      <SingleWrapper label='Ссылка на видео (youtube или vimeo)' comment=''>
        <Input
          action={handleInput}
          name='media_link'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Описание тура' comment=''>
        <TextEditor
          action={handleInput}
          name='description'
          old_data={data}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Главные впечатления' comment=''>
        <TextArea
          action={handleInput}
          name='main_impressions'
          label=''
          old_data={data}
          rows='7'
        />
      </SingleWrapper>

      <SingleWrapper label='Чем мы займемся в туре' comment=''>
        <TextEditor
          action={handleInput}
          name='plan'
          old_data={data}
          options={toursTypes}
          // multiple
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
  getTourTypes,
  setSecondaryNav,
})(Details)
