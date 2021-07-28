import { createGlobalStyle } from 'styled-components'
/* eslint-disable */
// @ts-ignore
const GlobalStyle = createGlobalStyle`  body {
  /* background-color: ${({ theme }) => theme.colors.background }; */
  background: url(images/main-bg.jpg) no-repeat center;
  background-size: cover;
  min-height: 100vh;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
