import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5'
import { StyledHeader } from './styles'
import { setThemeMode } from '../../store/actions/AppActions'
import { getLSThemeMode, setLSThemeMode, throtle } from '../../utils'

export const Header = () => {
  const stateApp = useSelector(state => state.app.themeMode)
  const dispatch = useDispatch()

  const handleThemeMode = () => {
    const currentThemeMode = getLSThemeMode()
    let newThemeMode = 'darkMode'
    if (currentThemeMode === 'darkMode') newThemeMode = 'lightMode'
    dispatch(setThemeMode(newThemeMode))
    setLSThemeMode(newThemeMode)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedthemeMode = useCallback(throtle(handleThemeMode, 500), [])

  return (
    <StyledHeader>
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div
        className="header__theme-mode"
        role="button"
        tabIndex="0"
        onClick={debouncedthemeMode}
        onKeyDown={debouncedthemeMode}
      >
        {stateApp === 'darkMode' ? (
          <div>
            <IoMoonSharp />
            <p>Dark Mode</p>
          </div>
        ) : (
          <div>
            <IoMoonOutline />
            <p>Light Mode</p>
          </div>
        )}
      </div>
    </StyledHeader>
  )
}
