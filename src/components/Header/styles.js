import styled from 'styled-components'

export const StyledHeader = styled.header`
  transition: 0.1s ease-in-out;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
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
  @media ${p => p.theme.breakPointsDevice.desktop} {
    padding: 2rem;
    h1 {
      font-size: 1.2rem;
    }
    .header__theme-mode {
      cursor: pointer;
      div {
        font-size: 1rem;
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.desktopM} {
    padding: 2rem 4.5rem;
  }
`
