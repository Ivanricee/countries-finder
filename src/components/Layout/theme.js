const theme = {
  fontSizeDetail: '0.875rem',
  fontSizeItem: '1rem',
  white: 'hsl(0, 0%, 100%)',
  fontNunito: '"Nunito Sans", sans-serif',
  color: 'hsl(210, 23.5%, 93.3%);',
  veryDarkBlue: 'hsl(207, 26%, 17%)',
  veryDarkBlueLight: 'hsl(200, 15%, 8%)',
  darkBlue: 'hsl(209, 23%, 22%)',
  darkGray: 'hsl(0, 0%, 52%)',
  breakPointsDevice: {
    mobileS: 'screen and (max-width: 768px)',
    mobile: 'screen and (min-width: 375px)',
    desktop: 'screen and (min-width: 768px)',
    desktopM: 'screen and (min-width: 1024px)',
  },
  boxShadow: '0px 0px 23px 3px #a6364d;',
}
const darkMode = {
  background: theme.veryDarkBlue,
  backgroundHeader: theme.darkBlue,
  color: theme.color,
  boxShadow: `0px 0px 13.5px -5px ${theme.veryDarkBlueLight}`,
  //---------------

  white: theme.white,
  fontSizeDetail: theme.fontSizeDetail,
  fontSizeItem: theme.fontSizeItem,
  fontNunito: theme.fontNunito,
  breakPointsDevice: theme.breakPointsDevice,
}
const lightMode = {
  background: theme.white,
  backgroundHeader: theme.white,
  color: theme.veryDarkBlueLight,
  boxShadow: `0px 0px 13.5px -5px ${theme.darkGray}`,
  //------------------------

  veryLightGray: 'hsl(0, 0%, 98%)',
  white: theme.white,
  fontSizeDetail: theme.fontSizeDetail,
  fontSizeItem: theme.fontSizeItem,
  fontNunito: theme.fontNunito,
  breakPointsDevice: theme.breakPointsDevice,
}
export const setThemeModeLayout = themeMode => {
  if (themeMode === 'darkMode') return darkMode
  return lightMode
}
