import isPropValid from '@emotion/is-prop-valid'
import GlobalStyle from '@/styles/GlobalStyles'
import { StyleSheetManager } from 'styled-components'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true
      }}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </StyleSheetManager>
  )
}

export default App
