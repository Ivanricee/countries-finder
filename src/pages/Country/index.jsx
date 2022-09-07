import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import {
  fetchCountryBorders,
  fetchCountryByName,
  setLoadingCBorders,
} from '../../store/actions/AppActions'
import { StyledCountry, StyledBorderCnt } from './styles'

export const Country = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { name } = useParams()
  const countryState = location.state
  const dispatch = useDispatch()
  const {
    countryBorders,
    cBordersLoading,
    country,
    countryLoading,
    countryError,
  } = useSelector(state => state.app)
  const localCountry = countryState || country
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
  useEffect(() => {
    if (countryState || country) {
      const countryData = countryState || country
      const codes = countryData?.borders?.join(',') || null
      if (codes) {
        dispatch(fetchCountryBorders(codes))
      } else {
        dispatch(setLoadingCBorders(false))
      }
    } else {
      dispatch(fetchCountryByName(name))
    }
  }, [countryState, country, dispatch, name])

  if (countryLoading && !localCountry)
    return (
      <StyledCountry>
        <div>Loading country</div>
      </StyledCountry>
    )
  if (countryError.length !== 0)
    return (
      <StyledCountry>
        <p>Country Not Found</p>
        {backButton('home')}
      </StyledCountry>
    )
  return (
    <StyledCountry>
      {backButton()}
      <div className="country__content">
        <img
          src={localCountry.flags.svg}
          alt={localCountry.name.common}
          width="300"
        />
        <h2>{localCountry.name.common}</h2>
        <div className="content-f">
          <div>
            <strong>Native Name:</strong>
            <p>{Object.values(localCountry.name.nativeName)[0].common}</p>
          </div>
          <div>
            <strong>Population:</strong>
            <p>{localCountry.population}</p>
          </div>
          <div>
            <strong>Region:</strong>
            <p>{localCountry.region}</p>
          </div>
          <div>
            <strong>Sub Region:</strong>
            <p>{localCountry.subregion}</p>
          </div>
          <div>
            <strong>Capital:</strong>
            <p>{localCountry?.capital[0]}</p>
          </div>
        </div>
        <div className="content-s">
          <div>
            <strong>Top Level Domain:</strong>
            <p>{localCountry?.tld[0]}</p>
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
        {cBordersLoading ? (
          <div>Loading borders</div>
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
      </div>
    </StyledCountry>
  )
}
