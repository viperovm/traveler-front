import Link from 'next/link'
import { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import { setCurrentSection } from '../../redux/actions/tourSectionActions'

const SecondaryNav = ({ setCurrentSection, secondary_nav, secondary }) => {
  const handleClick = data => {
    console.log('click: ', data)

    if (data && data.active && data.value) {
      setCurrentSection(data.value)
    }
  }

  return (
    secondary && (
      <>
        <ul>
          {secondary_nav &&
            secondary_nav.map((item, index) => (
              <li
                className='li-border-none'
                key={index}
                onClick={() => handleClick(item)}
              >
                <div
                  className={`tours-submenu-name-wrap ${
                    item.active ? 'item-active' : 'item-inactive'
                  }`}
                  // onClick={() => console.log(item)}
                  onClick={() => handleClick(item)}
                >
                  {item.text}
                  <svg
                    width='17'
                    height='17'
                    viewBox='0 0 17 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='8.5'
                      cy='8.5'
                      r='8.5'
                      fill={item.active ? '#84BB59' : '#BFBFBF'}
                    />
                    <path
                      d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </li>
            ))}
        </ul>
      </>
    )
  )
}

const mapStateToProps = state => ({
  activeSections: state.tourSection.active_sections,
  secondary_nav: state.tourSection.secondary_nav,
  secondary: state.tourSection.secondary,
})

export default connect(mapStateToProps, { setCurrentSection })(SecondaryNav)
