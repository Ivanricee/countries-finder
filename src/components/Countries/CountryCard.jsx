import React from 'react'
import { Link } from 'react-router-dom'
import { useNearScreen } from '../../hooks/useNearScreen'

export const CountryCard = ({ country, className }) => {
  const [show, observed] = useNearScreen()
  return (
    <article
      ref={observed}
      className={className}
      aria-label={`card ${country.name.common}`}
    >
      {show && (
        <Link
          to={`country/${encodeURIComponent(country.name.common)}`}
          state={country}
        >
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
              <p>{country.population.toLocaleString()}</p>
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
    </article>
  )
}
