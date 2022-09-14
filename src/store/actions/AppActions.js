import { fetchData } from '../../services'

export const setThemeMode = payload => ({
  type: '@app/themeMode',
  payload,
})
const setLoading = (type, payload) => ({
  type,
  payload,
})
const setError = (type, payload) => ({
  type,
  payload,
})
export const setLoadingCBorders = payload =>
  setLoading('@countries/countryBorders-loading', payload)

export const resetErrorCountry = payload =>
  setError('@countries/country-error', payload)

export const fetchCountries = () => {
  return async dispatch => {
    try {
      const countries = await fetchData()
      return dispatch({ type: '@countries/all', payload: countries })
    } catch (err) {
      dispatch(setError('@countries/all-eror', false))
      return err
    } finally {
      dispatch(setError('@countries/all-loading', false))
    }
  }
}

export const fetchCountryBorders = codes => {
  return async dispatch => {
    try {
      const countryBorders = await fetchData(codes)
      return dispatch({
        type: '@countries/countryBorders',
        payload: countryBorders,
      })
    } catch (err) {
      dispatch(setError('@countries/countryBorders-error', err))
      return err
    } finally {
      dispatch(setLoading('@countries/countryBorders-loading', false))
    }
  }
}

export const fetchCountryByName = name => {
  return async dispatch => {
    try {
      const countryName = await fetchData(null, name)
      return dispatch({
        type: '@countries/country',
        payload: countryName[0],
      })
    } catch (err) {
      dispatch(setLoading('@countries/country-error', err))
      return err
    } finally {
      dispatch(setError('@countries/country-loading', false))
    }
  }
}
// fetchData codes name region
export const fetchCountriesFilter = (name = null, region = null) => {
  return async dispatch => {
    try {
      dispatch(setLoading('@countries/filter-cError', ''))
      dispatch(setError('@countries/filter-cLoading', true))
      const prevFilterValue = name || region
      let countryFilter = null
      if (prevFilterValue) {
        countryFilter = await fetchData(null, name, region)
      }
      if (name || typeof name === 'string') {
        dispatch({
          type: '@countries/filter-value',
          payload: { type: 'input', value: prevFilterValue },
        })
      } else if (region || typeof region === 'string') {
        dispatch({
          type: '@countries/filter-value',
          payload: { type: 'region', value: prevFilterValue },
        })
      }
      return dispatch({
        type: '@countries/filter-countries',
        payload: countryFilter,
      })
    } catch (err) {
      dispatch(setLoading('@countries/filter-cError', err))
      return err
    } finally {
      dispatch(setError('@countries/filter-cLoading', false))
    }
  }
}
