import React, { useRef } from 'react'
import { IoSearchSharp, IoCloseCircleSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { StyledFilterCountries } from './styles'
import { debounce, throtle } from '../../utils'
import { fetchCountriesFilter } from '../../store/actions/AppActions'

export const FilterCountries = () => {
  const dispatch = useDispatch()
  const { prevFilterValue } = useSelector(state => state.app)

  const inputRef = useRef(null)
  const selectRef = useRef(null)
  const clearInput = () => {
    if (inputRef.current.value.length > 0) {
      inputRef.current.value = ''
      dispatch(fetchCountriesFilter(null, null)) // name,region
    }
  }

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
        <button type="button" onClick={throtle(clearInput, 700)}>
          <i>
            <IoCloseCircleSharp />
          </i>
        </button>
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
          {prevFilterValue.type === 'region' && (
            <option value="">All Region</option>
          )}
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </StyledFilterCountries>
  )
}
