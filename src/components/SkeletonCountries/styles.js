import styled from 'styled-components'
import { skeletonIn } from '../Layout/animation'

export const StyledSkeletonCountries = styled.section`
  background: ${p => p.theme.backgroundHeader};
  color: ${p => p.theme.color};
  inline-size: 16.44rem;
  min-block-size: 15rem;
  border-radius: 0.35rem;
  overflow: hidden;
  padding-block-end: 1rem;
  box-shadow: ${p => p.theme.boxShadow};
  animation: ${skeletonIn} 0.7s ease-in infinite;
  .card__img {
    background: ${p => p.theme.backgroundSkeleton};
    inline-size: 100%;
    block-size: 10rem;
    margin: 0;
  }
  .card__body {
    & > div:not(.card__img) {
      margin: 1.5rem;
    }
    .card__h2 {
      background: ${p => p.theme.backgroundSkeleton};
      inline-size: 10rem;
      block-size: 1.5rem;
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
        background: ${p => p.theme.backgroundSkeleton};
        inline-size: 10rem;
        block-size: 1rem;
      }
    }
  }
`
