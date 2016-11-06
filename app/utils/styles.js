import styled, { css } from 'styled-components';

const media = {
  mobile: (...args) => css`
    @media (max-width: 1100px) {
      ${ css(...args) }
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1100px) {
      ${ css(...args) }
    }
  `
}

export default media;
