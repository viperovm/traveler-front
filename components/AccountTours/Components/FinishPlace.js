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

const FinishPlace = ({
  action,
  finish_region,
  finish_country,
  finish_russian_region,
  finish_city,
  regions,

  finish_countries,
  finish_russianRegions,
  finish_cities,

  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
}) => {
  useEffect(() => {
    getRegions()
  }, [])

  const [finishRegions, setFinishRegions] = useState([])
  const [finishCountries, setFinishCountries] = useState([])
  const [finishRussianRegions, setFinishRussianRegions] = useState([])
  const [finishCities, setFinishCities] = useState([])

  const [finishRegion, setFinishRegion] = useState('')
  const [finishCountry, setFinishCountry] = useState('')
  const [finishRussianRegion, setFinishRussianRegion] = useState('')
  const [finishCity, setFinishCity] = useState('')

  useEffect(() => {
    if (regions) {
      setFinishRegions(regions)
    }
  }, [regions])

  useEffect(() => {
    if (finish_countries) {
      setFinishCountries(finish_countries)
    }
  }, [finish_countries])

  useEffect(() => {
    if (finish_russianRegions) {
      setFinishRussianRegions(finish_russianRegions)
    }
  }, [finish_russianRegions])

  useEffect(() => {
    if (finish_cities) {
      setFinishCities(finish_cities)
    }
  }, [finish_cities])

  useEffect(() => {
    if (finish_region) {
      setFinishRegion(finish_region)
    }
  }, [finish_region])

  useEffect(() => {
    if (finish_country) {
      setFinishCountry(finish_country)
    }
  }, [finish_country])

  useEffect(() => {
    if (finish_russian_region) {
      setFinishRussianRegion(finish_russian_region)
    }
  }, [finish_russian_region])

  useEffect(() => {
    if (finish_city) {
      setFinishCity(finish_city)
    }
  }, [finish_city])

  const handleSubmit = (name, data) => {
    if (name === 'finish_region') {
      setFinishCountries([])
      setFinishRussianRegions([])
      setFinishCities([])
      setFinishCountry('')
      setFinishRussianRegion('')
      setFinishCity('')
      action('finish_country', null)
      action('finish_russian_region', null)
      action('finish_city', null)
    }
    if (name === 'finish_country') {
      setFinishRussianRegions([])
      setFinishCities([])
      setFinishRussianRegion('')
      setFinishCity('')
      action('finish_russian_region', null)
      action('finish_city', null)
    }
    if (name === 'finish_russian_region') {
      setFinishCities([])
      setFinishCity('')
      action('finish_city', null)
    }
    action(name, data)
  }

  useEffect(() => {
    if (finishRegion) {
      // setCountrySet(true)
      getCountries(finishRegion, 'finish')
    }
  }, [finishRegion])

  useEffect(() => {
    if (finishCountry && finishCountry == 1) {
      // setCountrySet(true)
      getRussianRegions('finish')
    } else if (finishCountry) {
      getCities('finish', finishCountry, )
    }
  }, [finishCountry])

  useEffect(() => {
    if (finishRussianRegion) {
      // setCountrySet(true)
      getCities('finish', finishCountry, finishRussianRegion)
    }
  }, [finishRussianRegion])

  return (
    <>
      {finishRegions && finishRegions.length > 0 && (
        <SingleWrapper label='Регион конца тура' comment=''>
          <SelectInput
            action={handleSubmit}
            name='finish_region'
            label='Регион конца тура'
            comment=''
            val={finishRegion}
            options={finishRegions}
            // multiple
          />
        </SingleWrapper>
      )}

      {finishCountries && finishCountries.length > 0 && (
        <SingleWrapper label='Страна конца тура' comment=''>
          <SelectInput
            action={handleSubmit}
            name='finish_country'
            label='Страна конца тура'
            comment=''
            val={finishCountry}
            options={finishCountries}
            // multiple
          />
        </SingleWrapper>
      )}
      {finishRussianRegions && finishRussianRegions.length > 0 && (
        <SingleWrapper label='Российский регион конца тура' comment=''>
          <SelectInput
            action={handleSubmit}
            name='finish_russian_region'
            label='Российский регион конца тура'
            comment=''
            val={finishRussianRegion}
            options={finishRussianRegions}
            // multiple
          />
        </SingleWrapper>
      )}
      {finishCities && finishCities.length > 0 && (
        <SingleWrapper label='Город конца тура' comment=''>
          <SelectInput
            action={handleSubmit}
            name='finish_city'
            label='Город конца тура'
            comment=''
            val={finishCity}
            options={finishCities}
            // multiple
          />
        </SingleWrapper>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  regions: state.tours.regions,
  finish_countries: state.tours.finish_countries,
  finish_russianRegions: state.tours.finish_russian_regions,
  finish_cities: state.tours.finish_cities,
})

export default connect(mapStateToProps, {
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
})(FinishPlace)
