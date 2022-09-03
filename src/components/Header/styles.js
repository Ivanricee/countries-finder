import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  padding-block-start: 2rem;
  padding-block-end: 2rem;
  background: ${p => p.theme.backgroundHeader};
  color: ${p => p.theme.color};
  box-shadow: ${p => p.theme.boxShadow};
  h1 {
    margin: 0;
    font-size: 0.875rem;
  }
  .header__theme-mode {
    cursor: pointer;
    div {
      font-size: 0.75rem;
      display: flex;
      gap: 0.55rem;
      p {
        margin: 0;
        font-weight: 600;
      }
    }
  }
`
