import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root{
  transition: 0.15s;
  background-color: ${p => p.theme.background};
  font-family: ${p => p.theme.fontNunito};
  font-size: 16px;

}
body{
  margin:0 ;
}
`
