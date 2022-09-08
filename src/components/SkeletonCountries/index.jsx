import React from 'react'
import { StyledSkeletonCountries } from './styles'

export const SkeletonCountries = () => {
  return (
    <StyledSkeletonCountries>
      <div className="card__body">
        <div className="card__img" />
        <div className="card__h2" />
        <div>
          <strong>Population:</strong>
          <p />
        </div>
        <div>
          <strong>Region:</strong>
          <p />
        </div>
        <div>
          <strong>Capital:</strong>
          <p />
        </div>
      </div>
    </StyledSkeletonCountries>
  )
}
