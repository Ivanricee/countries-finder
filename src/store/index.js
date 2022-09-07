import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducers } from './reducers'
import { getLSThemeMode } from '../utils'

const getTheme = getLSThemeMode()

const INITIAL_STATE = {
  app: {
    themeMode: getTheme || 'darkMode',
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
    prevFilterValue: { type: '', value: '' },
  },
}

export const store = createStore(
  reducers,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk))
)

// store.subscribe(() => setLSThemeMode(store.getState().app.themeMode))
