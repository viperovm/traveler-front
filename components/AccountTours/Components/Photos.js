import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import Button from './Button'

import { connect } from 'react-redux'
import { setSecondaryNav } from '../../../redux/actions/tourSectionActions'
import { updateTour, setTourImages } from '../../../redux/actions/toursActions'

const Photos = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  done,
  setTourImages,
}) => {
  const [data, setData] = useState()
  const [completed, setCompleted] = useState(false)

  const handleInput = (image) => {
    setTourImages(image, tour.id)
  }

  useEffect(() => {if(tour) { 
    setData({
      tour_images: tour.tour_images,
    })
  }}, [tour])

  useEffect(() => {
    if (data) {
      if (data.cancellation_terms) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'photos') {
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
            if (item.value === 'photos') {
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
    setData({
      ...data,
      on_moderation: true,
    })
    updateTour(data, tour.id)
    done()
  }

  const handleButtonBack = () => {
    action('important')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Фотографии</h4>
      </div>

      <SingleWrapper
        label='Добавить фото'
        comment='Добавьте не менее 7 фотографий, первая из них станет обложкой тура на предпросмотре. НЕ используйте стоковый контент и материалы других фотографов без их разрешения, так как это является нарушением авторского права и может привести к судебным разбирательствам и штрафам. Подробнее о том, где искать и как правильно использовать фото и видео для своих туров смотрите в статье. '
      >
        <ObjectFileInput
          action={handleInput}
          name='tour_images'
          type='file'
          value={data && data.tour_images}
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
        <Button active={true} action={handleButtonSubmit} text='На модерацию' />
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
  setTourImages,
})(Photos)
