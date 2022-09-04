import { fetchData } from '../../services'

export const setThemeMode = payload => ({
  type: '@app/themeMode',
  payload,
})

export const fetchCountries = () => {
  return async dispatch => {
    try {
      const countries = await fetchData()
      return dispatch({ type: '@countries/all', payload: countries })
    } catch (err) {
      return err
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
      return err
    }
  }
}

export const fetchCountryName = name => {
  return async dispatch => {
    try {
      const countryName = await fetchData(null, name)
      return dispatch({ type: '@countries/name', payload: countryName[0] })
    } catch (err) {
      return err
    }
  }
}
