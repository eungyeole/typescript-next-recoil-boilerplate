import { globalStyle } from '@/src/styles/globalStyle'
import theme from '@/src/styles/theme'
import { Global, ThemeProvider } from '@emotion/react'
import React from 'react'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle}/>
      <RecoilRoot>
        <Component {...pageProps}/>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default MyApp
