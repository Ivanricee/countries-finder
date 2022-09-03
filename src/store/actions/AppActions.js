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
