import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StyledCountries, StyledCountryCard } from './styles'
import { useCountriesState } from '../../hooks/useCountriesState'

export const Countries = () => {
  const [loading, error, countries, getCountries] = useCountriesState()

  useEffect(() => {
    if (!countries) getCountries()
  }, [countries, getCountries])

  if (loading) return <div>Loading</div>
  if (error.length !== 0) return <div>Country Not Found</div>
  return (
    <StyledCountries countries={countries}>
      {countries.map(country => {
        return (
          <StyledCountryCard key={country.name.common}>
            <Link to={`country/${country.name.common}`} state={country}>
              <img
                src={country.flags.svg}
                alt={`flag ${country.name.common}`}
                width="260"
                loading="lazy"
              />
              <div className="card__body">
                <h2>{country.name.common}</h2>
                <div>
                  <strong>Population:</strong>
                  <p>{country.population}</p>
                </div>
                <div>
                  <strong>Region</strong>
                  <p>{country.region}</p>
                </div>
                <div>
                  <strong>Capital</strong>
                  <p>{country?.capital ? country.capital[0] : ''}</p>
                </div>
              </div>
            </Link>
          </StyledCountryCard>
        )
      })}
    </StyledCountries>
  )
}
