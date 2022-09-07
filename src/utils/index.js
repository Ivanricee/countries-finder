const THEME_MODE = 'themeMode'
export const setLSThemeMode = themeMode => {
  try {
    return localStorage.setItem(THEME_MODE, JSON.stringify(themeMode))
  } catch (err) {
    return err
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

export const debounce = (callback, delay) => {
  let timerId = null
  return (...args) => {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => callback(...args), delay)
  }
}

export const throtle = (callback, delay) => {
  let inThrothle = false
  return (...args) => {
    if (inThrothle) return
    console.log('throtled')
    callback(...args)
    inThrothle = true
    setTimeout(() => {
      inThrothle = false
    }, delay)
  }
}
