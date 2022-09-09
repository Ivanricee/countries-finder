import React, { useEffect } from 'react'

import { StyledCountries, StyledCountryCard } from './styles'
import { useCountriesState } from '../../hooks/useCountriesState'
import { SkeletonCountries } from '../SkeletonCountries'

export const Countries = () => {
  const [loading, error, countries, getCountries] = useCountriesState()

  useEffect(() => {
    if (!countries) getCountries()
  }, [countries, getCountries])

  if (loading)
    return (
      <StyledCountries>
        {new Array(20).fill(null).map((val, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SkeletonCountries key={i} />
        ))}
      </StyledCountries>
    )
  if (error.length !== 0)
    return (
      <StyledCountries>
        <p>Country Not Found</p>
      </StyledCountries>
    )
  return (
    <StyledCountries>
      {countries.map(country => {
        return <StyledCountryCard key={country.name.common} country={country} />
      })}
    </StyledCountries>
  )
}
