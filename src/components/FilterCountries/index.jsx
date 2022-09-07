import React, { useRef } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { StyledFilterCountries } from './styles'
import { debounce } from '../../utils'
import { fetchCountriesFilter } from '../../store/actions/AppActions'

export const FilterCountries = () => {
  const dispatch = useDispatch()
  const { prevFilterValue } = useSelector(state => state.app)

  const inputRef = useRef(null)
  const selectRef = useRef(null)

  const handleCountryNameChange = e => {
    const countryValue = e.target.value
    selectRef.current.value = ''
    dispatch(fetchCountriesFilter(countryValue, null)) // name,region
  }
  const handleCountryRegionChange = e => {
    const countryValue = e.target.value
    inputRef.current.value = ''
    dispatch(fetchCountriesFilter(null, countryValue)) // name,region
  }
  return (
    <StyledFilterCountries>
      <div className="filter__input">
        <i>
          <IoSearchSharp />
        </i>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search for a country..."
          onChange={debounce(handleCountryNameChange, 700)}
          defaultValue={
            prevFilterValue.type === 'input' ? prevFilterValue.value : ''
          }
        />
      </div>
      <div className="filter__select">
        <select
          ref={selectRef}
          defaultValue={
            prevFilterValue.type === 'region' ? prevFilterValue.value : ''
          }
          onChange={debounce(handleCountryRegionChange)}
        >
          <option value="" disabled hidden>
            Filter by Region
          </option>
          <option vale="Africa">Africa</option>
          <option vale="Americas">Americas</option>
          <option vale="Asia">Asia</option>
          <option vale="Europe">Europe</option>
          <option vale="Oceania">Oceania</option>
          {prevFilterValue.type === 'region' && <option value="">All</option>}
        </select>
      </div>
    </StyledFilterCountries>
  )
}
