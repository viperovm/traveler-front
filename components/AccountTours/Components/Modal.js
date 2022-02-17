import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import RemoteDataSelect from '../FormFields/RemoteDataSelect'

import {connect} from'react-redux'
import { getRemoteData } from '../../../redux/actions/tourSectionActions'


const Modal = ({
  title,
  disabled = false,
  search_data,
  search_id,
  getRemoteData,
  remote_data,
}) => {
  const [active, setActive] = useState(false)
  const [filter, setFilter] = useState('')
  const [dataType, setDataType] = useState('')

  const handleOpen = () => {
    getRemoteData(search_data, search_id)
    // setActive(true)
  }

  const handleClose = () => {
    setActive(false)
  }

   useEffect(() => {
     window.scrollIntoView({ behavior: 'smooth' })
   }, [])

  return (
    <>
      <button disabled={disabled} onClick={handleOpen} className='modal-button'>
        Добавить
      </button>

      <div className={`modal-wrapper ${active && 'modal-active'}`}>
        <div className='modal-body'>
          <div className='modal-header'>
            {title}
            <div onClick={handleClose} className='modal-close-button'></div>
          </div>
          <div className='modal-content'>
            <RemoteDataSelect remote_data={remote_data} />
          </div>
          <div className='modal-footer'></div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  remote_data: state.tourSection.remote_data,
})

export default connect(mapStateToProps, {getRemoteData})(Modal)