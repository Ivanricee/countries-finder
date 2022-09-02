import styled from 'styled-components'

export const StyledFilterCountries = styled.section`
  padding: 1.5rem 1rem;
  color: ${p => p.theme.color};

  .filter__input {
    background: ${p => p.theme.backgroundHeader};
    display: flex;
    align-items: center;
    padding: 0.75rem 2rem;
    box-shadow: ${p => p.theme.boxShadow};
    border-radius: 0.3rem;
    input {
      color: ${p => p.theme.color};
      background: transparent;
      font-weight: 600;
      font-size: 0.7rem;
      border: none;
      border-style: none;
      flex: 1;
    }
    i {
      margin-inline-end: 1.5rem;
      font-size: 1.25rem;
      transform: translateY(25%);
    }
  }
  .filter__select {
    margin-block-start: 2.5rem;
    background: ${p => p.theme.backgroundHeader};
    inline-size: 60%;
    position: relative;
    box-shadow: ${p => p.theme.boxShadow};
    border-radius: 0.3rem;
    select {
      color: ${p => p.theme.color};
      inline-size: 100%;
      font-size: 0.75rem;
      padding: 1rem 1rem;
      box-sizing: border-box;
      appearance: none;
      background: transparent;
      border: none;
      outline: none;
      option {
        background: ${p => p.theme.backgroundHeader};
        border: none;
        outline: none;
        appearance: none;
      }
    }
    ::after {
      position: absolute;
      content: '˯';
      inset-inline-end: 1rem;
      transform: translateY(-40%);
      font-size: 2.6rem;
      pointer-events: none;
    }
  }
  select:focus,
  input:focus {
    outline: none;
  }
`
