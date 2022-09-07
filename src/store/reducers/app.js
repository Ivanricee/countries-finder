const INITIAL_STATE = {
  themeMode: 'darkMode',
  countries: null,
  cLoading: true,
  cError: '',
  countryBorders: null,
  cBordersLoading: true,
  cBordersError: '',
  country: null,
  countryLoading: true,
  countryError: '',
  filterCountries: null,
  filterCError: '',
  filterCLoading: false,
  prevFilterValue: '',
}

// eslint-disable-next-line default-param-last
export const app = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line no-console
  return (
    {
      '@app/themeMode': { ...state, themeMode: action.payload },
      '@countries/all': { ...state, countries: action.payload },
      '@countries/all-loading': { ...state, cLoading: action.payload },
      '@countries/all-eror': { ...state, cError: action.payload },
      '@countries/countryBorders': { ...state, countryBorders: action.payload },
      '@countries/countryBorders-loading': {
        ...state,
        cBordersLoading: action.payload,
      },
      '@countries/countryBorders-error': {
        ...state,
        cBordersError: action.payload,
      },
      '@countries/country': { ...state, country: action.payload },
      '@countries/country-loading': {
        ...state,
        countryLoading: action.payload,
      },
      '@countries/country-error': { ...state, countryError: action.payload },
      '@countries/filter-countries': {
        ...state,
        filterCountries: action.payload,
      },
      '@countries/filter-cError': { ...state, filterCError: action.payload },
      '@countries/filter-cLoading': {
        ...state,
        filterCLoading: action.payload,
      },
      '@countries/filter-value': { ...state, prevFilterValue: action.payload },
    }[action.type] || state
  )
}
