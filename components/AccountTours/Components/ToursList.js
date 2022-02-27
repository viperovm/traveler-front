import { useEffect, useState } from 'react'
import TourCard from "./TourCard"
import { connect } from "react-redux"

import {
  getTours
} from '../../../redux/actions/toursActions'

const ToursList = ({ tours, getTours }) => {
  useEffect(() => {
    getTours()
  }, [])

  console.log(tours)

  const [active, setActive] = useState(false)

  return (
    <>
      <div
        className={`tours-wrapper`}
      >
        {tours &&
          tours.length > 0 &&
          tours.map((item, index) => <TourCard key={index} tour={item} />)}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  tours: state.tours.tours,
})

export default connect(mapStateToProps, { getTours })(ToursList)