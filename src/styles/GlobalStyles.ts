// styles/global-styles.ts
import { createGlobalStyle } from 'styled-components'
import { reset } from './Reset'

const GlobalStyle = createGlobalStyle`
 ${reset}

  html,
  body {
    padding: 0;
    margin: 0;
    letter-spacing: -1px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    max-width: 100vw;
  }

  .txt-c {
    text-align: center;
  }
  .txt-r {
    text-align: right;
  }
  .txt-l {
    text-align: left;
  }
  p {
    margin: 0;
  }
`

export default GlobalStyle
