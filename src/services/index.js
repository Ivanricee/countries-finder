import axios from 'axios'

const COUNTRIES_API = 'https://restcountries.com/v3.1'
// eslint-disable-next-line no-unused-vars
export const fetchData = async (code = null) => {
  const searchBy = '/all'
  try {
    const countryFetch = await axios.get(`${COUNTRIES_API}${searchBy}`)
    return await countryFetch.data
  } catch (err) {
    throw new Error('error: ', err)
  }
}
