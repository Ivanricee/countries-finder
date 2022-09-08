import styled from 'styled-components'

export const StyledBorderCnt = styled.div`
  background: ${p => p.theme.backgroundHeader};
  margin: 0.25rem 0.25rem;
  padding: 0.35rem 0.5rem;
  min-inline-size: 5.1rem;
  text-align: center;
  font-size: 0.75rem;
  border-radius: 0.2rem;
  box-shadow: ${p => p.theme.boxShadow};

  p {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: inherit;
    :visited {
      text-decoration: inherit;
      color: inherit;
    }
  }
`
export const StyledCountry = styled.section`
  margin: 1.6rem;
  color: ${p => p.theme.color};
  .country__back-btn {
    display: flex;
    background: ${p => p.theme.backgroundHeader};
    inline-size: 7rem;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    font-size: 0.9rem;
    box-sizing: border-box;
    border-radius: 0.25rem;
    margin-block-end: 3rem;
    margin-block-start: 2rem;
    box-shadow: ${p => p.theme.boxShadow};
    cursor: pointer;
    p {
      margin: 0;
    }
    i {
      transform: translateY(12.5%);
    }
  }
  .country__content {
    .content__img {
      inline-size: 100%;
      img {
        inline-size: 100%;
      }
    }
    .content__info {
      h2 {
        margin-block-start: 2rem;
        font-size: 1.2rem;
      }
    }
    .content-f,
    .content-s {
      margin-block-end: 2rem;
      & > div {
        display: flex;
        align-items: center;
        gap: 0.28rem;
        line-height: 1rem;
        strong {
          font-size: 0.85rem;
          font-weight: 600;
        }
        p {
          font-size: 0.85rem;
          margin: 0.4rem 0;
        }
      }
    }

    .country__borders {
      display: flex;
      flex-wrap: wrap;
      h3 {
        font-size: 1rem;
        font-weight: 600;
        inline-size: 100%;
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.desktop} {
    margin: 2rem;
    .country__back-btn {
      margin-block-end: 5rem;
    }
    .country__content {
      display: flex;
      align-items: center;
      justify-content: center;
      .content__img {
        flex: 1;
        inline-size: 100%;
        margin-inline-end: 2rem;
        img {
        }
      }
      .content__info {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        h2 {
          flex-basis: 100%;
          margin-block-start: 0;
        }
        .content-f {
          flex-basis: 50%;
          margin-inline-end: 0.5rem;
        }
        .content-s {
          flex-basis: 45%;
        }
        .country__borders {
          flex-basis: 100%;
        }
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.desktopM} {
    margin: 5rem;
    .country__content {
      display: flex;
      .content__img {
        inline-size: 60%;
        margin-inline-end: 6.5rem;
      }
      .content__info {
        .content-f {
          margin-inline-end: 0rem;
        }
        .content-s {
          flex-basis: 50%;
        }
      }
    }
  }
`
