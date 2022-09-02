const THEME_MODE = 'themeMode'
export const setLSThemeMode = themeMode => {
  try {
    localStorage.setItem(THEME_MODE, JSON.stringify(themeMode))
  } catch (err) {
    console.log(err)
  }
}

export const getLSThemeMode = () => {
  try {
    const themeItem = localStorage.getItem(THEME_MODE)
    if (themeItem) return JSON.parse(themeItem)
    return null
  } catch (err) {
    console.log('error: ', err)
    return undefined
  }
}
