import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root{
  background-color: ${p => p.theme.background};
  font-family: ${p => p.theme.fontNunito};
  font-size: 16px;
  block-size: 100vh;
}
body{
  margin:0 ;
}
`
