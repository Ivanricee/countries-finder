const INITIAL_STATE = {
  themeMode: 'darkMod',
  countries: [],
}

// eslint-disable-next-line default-param-last
export const app = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line no-console
  return (
    {
      '@app/themeMode': { ...state, themeMode: action.payload },
      '@countries/all': { ...state, countries: action.payload },
    }[action.type] || state
  )
}
