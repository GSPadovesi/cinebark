import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    color: #fff;
    background: #020307;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    min-width: 320px;
    overflow-x: hidden;
    background: radial-gradient(circle at top, #15100a 0%, #080807 42%, #020307 100%);
  }

  #root {
    min-height: 100vh;
  }
`
