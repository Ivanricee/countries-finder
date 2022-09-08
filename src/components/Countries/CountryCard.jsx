import React from 'react'
import { Link } from 'react-router-dom'
import { useNearScreen } from '../../hooks/useNearScreen'

export const CountryCard = ({ country, className }) => {
  const [show, observed] = useNearScreen()
  return (
    <div ref={observed} className={className}>
      {show && (
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
              <strong>Region:</strong>
              <p>{country.region}</p>
            </div>
            <div>
              <strong>Capital:</strong>
              <p>{country?.capital ? country.capital[0] : ''}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}
