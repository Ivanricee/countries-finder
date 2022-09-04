import styled from 'styled-components'

export const StyledCountries = styled.section`
  //background: ${p => (!p.countries ? 'red' : 'blue')};
  margin: 1rem 3.5rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
`
export const StyledCountryCard = styled.div`
  background: ${p => p.theme.backgroundHeader};
  color: ${p => p.theme.color};
  inline-size: 16.44rem;
  border-radius: 0.35rem;
  overflow: hidden;
  padding-block-end: 1rem;
  box-shadow: ${p => p.theme.boxShadow};
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
