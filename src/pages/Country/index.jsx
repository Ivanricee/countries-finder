import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { Helmet } from 'react-helmet'
import { StyledCountry, StyledBorderCnt } from './styles'
import { useCountryState } from '../../hooks/useCountryState'

export const Country = () => {
  const [loading, error, localCountry, cBordersLoading, countryBorders] =
    useCountryState()

  const navigate = useNavigate()

  const handleBack = (home = null) => {
    if (home) return navigate('/')
    return navigate(-1)
  }
  const backButton = (home = null) => (
    <div
      className="country__back-btn"
      role="button"
      tabIndex="0"
      onClick={() => handleBack(home)}
      onKeyDown={() => handleBack(home)}
    >
      <i>
        <IoArrowBack />
      </i>
      <p>{home ? 'home' : 'Back'}</p>
    </div>
  )

  if (loading)
    return (
      <StyledCountry>
        <div>Loading country</div>
      </StyledCountry>
    )
  if (error.length !== 0)
    return (
      <StyledCountry>
        <p>Country Not Found</p>
        {backButton('home')}
      </StyledCountry>
    )
  return (
    <StyledCountry>
      {backButton()}

      <Helmet>
        <title> Country: {localCountry.name.common} </title>
        <meta name="description" content="Country" />
      </Helmet>
      <div className="country__content">
        <section className="content__img">
          <img
            src={localCountry.flags.svg}
            alt={localCountry.name.common}
            width="300"
          />
        </section>
        <section className="content__info">
          <h2>{localCountry.name.common}</h2>
          <ul className="content-f">
            <li>
              <strong>Native Name:</strong>
              <p>{Object.values(localCountry.name.nativeName)[0].common}</p>
            </li>
            <li>
              <strong>Population:</strong>
              <p>{localCountry.population.toLocaleString()}</p>
            </li>
            <li>
              <strong>Region:</strong>
              <p>{localCountry.region}</p>
            </li>
            <li>
              <strong>Sub Region:</strong>
              <p>{localCountry.subregion}</p>
            </li>
            <li>
              <strong>Capital:</strong>
              <p>{localCountry?.capital[0]}</p>
            </li>
          </ul>
          <ul className="content-s">
            <li>
              <strong>Top Level Domain:</strong>
              <p>{localCountry?.tld[0]}</p>
            </li>
            <li>
              <strong>Currencies:</strong>
              <p>
                {Object.values(localCountry.currencies).map(
                  (currency, i, cArr) => {
                    const condition = i > 0 && i < cArr.length

                    const comma = condition ? ', ' : ''
                    return `${comma}${currency.name}`
                  }
                )}
              </p>
            </li>
            <li>
              <strong>Languages:</strong>
              <p>
                {Object.values(localCountry.languages).map(
                  (language, i, lArra) => {
                    const condition = i > 0 && i < lArra.length
                    const comma = condition ? ', ' : ''
                    return `${comma}${language}`
                  }
                )}
              </p>
            </li>
          </ul>
          {cBordersLoading ? (
            <div className="country__borders-loader">Loading borders...</div>
          ) : (
            <div className="country__borders">
              <h3>Border Countries:</h3>
              {countryBorders ? (
                countryBorders.map(countryBorder => {
                  return (
                    <StyledBorderCnt key={countryBorder.name.common}>
                      <Link
                        to={`/country/${countryBorder.name.common}`}
                        state={countryBorder}
                        key={countryBorder.name.common}
                      >
                        {countryBorder.name.common}
                      </Link>
                    </StyledBorderCnt>
                  )
                })
              ) : (
                <StyledBorderCnt>
                  <p>N/A</p>
                </StyledBorderCnt>
              )}
            </div>
          )}
        </section>
      </div>
    </StyledCountry>
  )
}
