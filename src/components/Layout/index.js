import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { GlobalStyles } from './GlobalStyles'
import { setThemeModeLayout } from './theme'
import { Header } from '../Header'

export const Layout = ({ children }) => {
  const themeMode = useSelector(state => state.app.themeMode)
  const themeModeSelected = setThemeModeLayout(themeMode)

  return (
    <ThemeProvider theme={themeModeSelected}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}
