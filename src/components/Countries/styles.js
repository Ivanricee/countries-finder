import styled from 'styled-components'

export const StyledCountries = styled.section`
  background: ${p => (!p.countries ? 'red' : 'blue')};
`
