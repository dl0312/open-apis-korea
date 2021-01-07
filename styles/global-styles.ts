// eslint-disable-next-line import/no-extraneous-dependencies
import reset from 'styled-reset'

import { media, Theme } from './theme'
import { createGlobalStyle } from './themed-components'

export const GlobalStyle = createGlobalStyle<Theme>`
  ${reset}
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body{
    font-family: 'Nanum Gothic', sans-serif; 
    font-size: 0.8rem;
    background: ${({ mainBackground }) => mainBackground};
    color: ${({ title }) => title};
    
    /** Responsive Design */
    ${media.giant} {
      /** Giant View */
    }
    ${media.desktop} {
      /** Desktop View */
    }
    ${media.tablet} {
      /** Tablet View */
      font-size: 0.8rem;
    }
    ${media.phone} {
      /** Phone View */
      font-size: 0.8rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5em;
    font-weight: 500;
  }

  h1 {
    font-size: 2rem;
    font-weight: bolder;
    ${media.tablet} {
      /** Tablet View */
      font-size: 1.5rem;
    }
    ${media.phone} {
      /** Phone View */
      font-size: 1.5rem;
    }
  }

  label {
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none !important;
    &:hover{
        color: ${({ linkText }) => linkText};
    }
  }

  input, button{
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    &:active {
    }
  }

  /** animations */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`
