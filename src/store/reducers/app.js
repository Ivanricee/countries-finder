const INITIAL_STATE = {
  themeMode: 'darkMod',
}

// eslint-disable-next-line default-param-last
export const app = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line no-console
  return (
    {
      '@app/themeMode': [{ ...state }, action.payload],
    }[action.type] || state
  )
  /* switch (action.type) {
    case '@app/themeMode':
      return [...state, action.payload]
    default:
      return {
        templateInit: 'Countries by Ivanricesdf',
      }
  } */
}
