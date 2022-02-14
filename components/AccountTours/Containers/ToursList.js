import { useState, useEffect } from 'react'
import { getTourTypes } from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'
import Account from '../../../layouts/account/account'
import { setPage } from '../../../redux/actions/authActions'
import AddTour from './AddTour'

const MyTours = ({ getTourTypes, toursTypes, setPage, status }) => {
  const [editing, setEditing] = useState(false)

  return (
    <>
      
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  status: state.auth.status,
})

export default connect(mapStateToProps, { getTourTypes, setPage })(MyTours)
