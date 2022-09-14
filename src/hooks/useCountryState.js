import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import {
  fetchCountryBorders,
  fetchCountryByName,
  resetErrorCountry,
  setLoadingCBorders,
} from '../store/actions/AppActions'

export const useCountryState = () => {
  const { name } = useParams()
  const location = useLocation()
  const countryState = location.state
  const {
    countryBorders,
    cBordersLoading,
    country,
    countryLoading,
    countryError,
  } = useSelector(state => state.app)

  const dispatch = useDispatch()
  useEffect(() => {
    if (countryError) dispatch(resetErrorCountry(''))
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryState, country, dispatch, name])

  const localCountry = countryState || country
  const loading = countryLoading && !localCountry
  const error = countryError

  return [
    loading,
    error?.message || '',
    localCountry,
    cBordersLoading,
    countryBorders,
  ]
}
