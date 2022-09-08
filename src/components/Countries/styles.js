import styled from 'styled-components'

export const StyledCountries = styled.section`
  //background: ${p => (!p.countries ? 'red' : 'blue')};
  margin: 1rem 3.5rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  @media ${p => p.theme.breakPointsDevice.mobileS} {
    display: flex;
  }
  @media ${p => p.theme.breakPointsDevice.desktop} {
    margin: 1rem 2rem;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
  @media ${p => p.theme.breakPointsDevice.desktopM} {
    margin: 1rem 4.5rem;
    gap: 5rem;
  }
`
export const StyledCountryCard = styled.div`
  background: ${p => p.theme.backgroundHeader};
  color: ${p => p.theme.color};
  inline-size: 16.44rem;
  min-block-size: 15rem;
  border-radius: 0.35rem;
  overflow: hidden;
  padding-block-end: 1rem;
  box-shadow: ${p => p.theme.boxShadow};
  a {
    text-decoration: inherit;
    color: inherit;
    :visited {
      text-decoration: inherit;
      color: inherit;
    }
  }
  img {
    inline-size: 100%;
    block-size: 10rem;
    object-fit: cover;
  }
  .card__body {
    margin: 1.5rem 1.5rem;
    h2 {
      font-size: 1.2rem;
      font-weight: 800;
      margin: 0;
      margin-block-end: 1rem;
    }
    & > div {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      strong {
        font-weight: 600;
        font-size: 0.9rem;
      }
      p {
        line-height: 1.5rem;
        margin: 0;
        font-size: 0.85rem;
      }
    }
  }
`
