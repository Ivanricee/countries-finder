import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { StyledFilterCountries } from './styles'

export const FilterCountries = () => {
    return (
        <StyledFilterCountries>
            <div className="filter__input">
                <i>
                    <IoSearchSharp />
                </i>
                <input placeholder="Search for a country..." />
            </div>
            <div className="filter__select">
                <select defaultValue="default">
                    <option value="default" disabled hidden>
                        Filter by Region
                    </option>
                    <option vale="Africa">Africa</option>
                    <option vale="Americas">Americas</option>
                    <option vale="Asia">Asia</option>
                    <option vale="Europe">Europe</option>
                    <option vale="Oceania">Oceania</option>
                </select>
            </div>
        </StyledFilterCountries>
    )
}
