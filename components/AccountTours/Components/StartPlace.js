import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import SelectInput from '../FormFields/SelectInput'

import {
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
} from '../../../redux/actions/toursActions'

import { connect } from 'react-redux'

const StartPlace = ({
  action,
  start_region,
  start_country,
  start_russian_region,
  start_city,
  regions,
  start_countries,
  start_russianRegions,
  start_cities,
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
}) => {
  useEffect(() => {
    getRegions()
  }, [])

  console.log('start_region: ', start_region)
  console.log('start_country: ', start_country)
  console.log('start_russian_region: ', start_russian_region)
  console.log('start_city: ', start_city)
  console.log('regions: ', regions)
  console.log('start_countries: ', start_countries)
  console.log('start_russianRegions: ', start_russianRegions)
  console.log('start_cities: ', start_cities)

  const [startRegions, setStartRegions] = useState([])
  const [startCountries, setStartCountries] = useState([])
  const [startRussianRegions, setStartRussianRegions] = useState([])
  const [startCities, setStartCities] = useState([])

  const [startRegion, setStartRegion] = useState('')
  const [startCountry, setStartCountry] = useState('')
  const [startRussianRegion, setStartRussianRegion] = useState('')
  const [startCity, setStartCity] = useState('')

  useEffect(() => {
    if (regions) {
      setStartRegions(regions)
    }
  }, [regions])

  useEffect(() => {
    if (start_countries) {
      setStartCountries(start_countries)
    }
  }, [start_countries])

  useEffect(() => {
    if (start_russianRegions) {
      setStartRussianRegions(start_russianRegions)
    }
  }, [start_russianRegions])

  useEffect(() => {
    if (start_cities) {
      setStartCities(start_cities)
    }
  }, [start_cities])

  useEffect(() => {
    if (start_region) {
      setStartRegion(start_region)
    }
  }, [start_region])

  useEffect(() => {
    if (start_country) {
      setStartCountry(start_country)
    }
  }, [start_country])

  useEffect(() => {
    if (start_russian_region) {
      setStartRussianRegion(start_russian_region)
    }
  }, [start_russian_region])

  useEffect(() => {
    if (start_city) {
      setStartCity(start_city)
    }
  }, [start_city])

  const handleSubmit = (name, data) => {
    if (name === 'start_region') {
      console.log(name, data)
      setStartCountries([])
      setStartRussianRegions([])
      setStartCities([])
      setStartCountry('')
      setStartRussianRegion('')
      setStartCity('')
      action('start_country', null)
      action('start_russian_region', null)
      action('start_city', null)
      console.log(111)
      action('start_region', data)
      console.log(222)
    }
    if (name === 'start_country') {
      console.log(name, data)
      setStartRussianRegions([])
      setStartCities([])
      setStartRussianRegion('')
      setStartCity('')
      action('start_russian_region', null)
      action('start_city', null)
      action('start_country', data)
    }
    if (name === 'start_russian_region') {
      console.log(name, data)
      setStartCities([])
      setStartCity('')
      action('start_city', null)
      action('start_russian_region', data)
    }
    if (name === 'start_city') {
      console.log(name, data)
      action('start_city', data)
    }
  }

  useEffect(() => {
    if (startRegion) {
      // setCountrySet(true)
      getCountries(startRegion, 'start')
    }
  }, [startRegion])

  useEffect(() => {
    if (startCountry && startCountry == 1) {
      // setCountrySet(true)
      getRussianRegions('start')
    } else if (startCountry) {
      getCities('start', startCountry)
    }
  }, [startCountry])

  useEffect(() => {
    if (startRussianRegion) {
      // setCountrySet(true)
      getCities('start', startCountry, startRussianRegion)
    }
  }, [startRussianRegion])

  return (
    <>
      {startRegions && startRegions.length > 0 && (
        <SingleWrapper label='Регион начала тура' comment=''>
          <SelectInput
            action={handleSubmit}
            name='start_region'
            label='Регион начала тура'
            comment=''
            val={startRegion}
            options={startRegions}
            // multiple
          />
        </SingleWrapper>
      )}

      {startCountries && startCountries.length > 0 && (
        <SingleWrapper label='Страна начала тура' comment=''>
          <SelectInput
            action={handleSubmit}
            name='start_country'
            label='Страна начала тура'
            comment=''
            val={startCountry}
            options={startCountries}
            // multiple
          />
        </SingleWrapper>
      )}
      {startRussianRegions && startRussianRegions.length > 0 && (
        <SingleWrapper label='Российский регион начала тура' comment=''>
          <SelectInput
            action={handleSubmit}
            name='start_russian_region'
            label='Российский регион начала тура'
            comment=''
            val={startRussianRegion}
            options={startRussianRegions}
            // multiple
          />
        </SingleWrapper>
      )}
      {startCities && startCities.length > 0 && (
        <SingleWrapper label='Город начала тура' comment=''>
          <SelectInput
            action={handleSubmit}
            name='start_city'
            label='Город начала тура'
            comment=''
            val={startCity}
            options={startCities}
            // multiple
          />
        </SingleWrapper>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  regions: state.tours.regions,
  start_countries: state.tours.start_countries,
  start_russianRegions: state.tours.start_russian_regions,
  start_cities: state.tours.start_cities,
})

export default connect(mapStateToProps, {
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
})(StartPlace)
