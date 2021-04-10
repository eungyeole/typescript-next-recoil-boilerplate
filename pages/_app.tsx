import { globalStyle } from '@/src/styles/globalStyle'
import theme from '@/src/styles/theme'
import { Global, ThemeProvider } from '@emotion/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle}/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
