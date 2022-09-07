import axios from 'axios'

const COUNTRIES_API = 'https://restcountries.com/v3.1'
// eslint-disable-next-line no-unused-vars
export const fetchData = async (codes = null, name = null, region = null) => {
  let searchBy = '/all'
  if (codes) searchBy = `/alpha?codes=${codes}`
  if (name) searchBy = `/name/${name}`
  if (region) searchBy = `/region/${region}`
  try {
    const countryFetch = await axios.get(`${COUNTRIES_API}${searchBy}`)
    return await countryFetch.data
  } catch (err) {
    throw new Error(err)
  }
}
