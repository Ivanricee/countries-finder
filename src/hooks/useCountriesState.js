import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../store/actions/AppActions'

export const useCountriesState = () => {
  const dispatch = useDispatch()
  const allCountries = useSelector(state => state.app.countries)
  const filteredCountries = useSelector(state => state.app.filterCountries)

  const { filterCLoading, filterCError, cLoading, cError } = useSelector(
    state => state.app
  )

  // Init countries states with all o filtered countries.
  let countries = allCountries || null
  if (filteredCountries) countries = filteredCountries
  const loading = filterCLoading || cLoading
  const error = filterCError || cError

  const getCountries = () => {
    dispatch(fetchCountries())
  }

  return [loading, error?.message || '', countries, getCountries]
}
