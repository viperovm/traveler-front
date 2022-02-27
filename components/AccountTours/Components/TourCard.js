import { useState, useEffect } from 'react'
import cart from '../../../styles/img/shopping-cart.svg'
import view from '../../../styles/img/view.svg'
import Image from 'next/image'
import dateFormat, { masks } from 'dateformat'

const TourCard = ({ tour }) => {
  const label = tour.is_active
    ? 'Опубликовано'
    : tour.on_moderation
    ? 'На Модерации'
    : tour.is_draft
    ? 'Черновик'
    : ''
  const cssClass = tour.is_active
    ? 'active'
    : tour.on_moderation
    ? 'moderation'
    : tour.is_draft
    ? 'draft'
    : ''

  return (
    <>
      <div className='tour-card'>
        <div
          className='tour-image'
          style={{ backgroundImage: 'url(' + tour.tmb_wallpaper + ')' }}
        >
          <div
            className={`tour-label tour-label${cssClass ? '-' + cssClass : ''}`}
          >
            {label}
          </div>
          <div className='tour-menu'></div>
        </div>
        <div className='tour-data'>
          <div className='tour-header'>
            <div className='tour-region'>{tour.start_country}</div>
            <div className='tour-name'>{tour.name}</div>
          </div>
          <div className='tour-footer'>
            <div className='tour-footer-left'>
              <div className='tour-footer-dates'>
                {tour.duration} дн. (с{' '}
                {dateFormat(new Date(tour.start_date), 'mm.dd.yyyy')})
              </div>
              <div className='tour-footer-price'>от {tour.price} ₽</div>
            </div>
            <div className='tour-footer-right'>
              <div className='tour-footer-sold'>
                <div className='tour-footer-value'>
                  {tour.sold ? tour.sold : '0'}
                </div>{' '}
                <Image src={cart} alt='shopping-cart' />
              </div>
              <div className='tour-footer-watched'>
                <div className='tour-footer-value'>
                  {tour.watched ? tour.watched : '125'}
                </div>{' '}
                <Image src={view} alt='view' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourCard
