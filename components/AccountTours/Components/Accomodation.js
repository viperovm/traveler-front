import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
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
  updateTour,
  getLanguages,
  setPropertyImage,
} from '../../../redux/actions/toursActions'
import { setSecondaryNav } from '../../../redux/actions/tourSectionActions'

import { update_tour } from '../../../redux/actions/currentTourActions'

const Accomodation = ({ tour, action, setPropertyImage, toursTypes }) => {
  // const [tour, settour] = useState()
  const [completed, setCompleted] = useState(false)

  const handleInput = (name, value) => {
    update_tour(name, value)
  }

  const handleImageLoad = image => {
    setPropertyImage(image, tour.id)
  }

  return (
    <>
      <SingleWrapper label='Где планируется проживание' comment=''>
        <SelectInput
          action={handleInput}
          name='tour_property_types'
          label='Где планируется проживание'
          value={tour && tour.tour_property_types}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Размещение' comment=''>
        <SelectInput
          action={handleInput}
          name='accomodation'
          label='Размещение'
          value={tour && tour.accomodation}
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
          value={tour && tour.hotel_name}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Добавить фото мест проживания в путешествии'
        comment=''
      >
        <ObjectFileInput
          action={handleImageLoad}
          name='tour_property_images'
          value={tour && tour.tour_property_images}
          type='file'
          // multiple
        />
      </SingleWrapper>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  languages: state.tours.languages,
  secondary_nav: state.tourSection.secondary_nav,
  tour: state.local_tour.tour,
})

export default connect(mapStateToProps, {
  getTourTypes,
  setSecondaryNav,
  updateTour,
  getLanguages,
  setPropertyImage,
  update_tour,
})(Accomodation)
