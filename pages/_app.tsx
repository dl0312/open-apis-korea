import { useState, useEffect } from 'react'

import { ThemeType } from 'interfaces/theme'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import { applicationName } from 'public/config'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { GlobalStyle } from 'styles/global-styles'
import { themes } from 'styles/theme'
import { ThemeProvider } from 'styles/themed-components'
import useDarkMode from 'use-dark-mode'

import 'public/antd.min.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false)

  /** For SSR mismatch */
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const themeMap = {
    [ThemeType.LIGHT]: 'antd.min.css',
    [ThemeType.DARK]: 'antd.dark.css',
  }

  const body = (
    <ThemeProvider theme={themes[darkMode.value ? ThemeType.DARK : ThemeType.LIGHT]}>
      <ThemeSwitcherProvider defaultTheme={darkMode.value ? ThemeType.DARK : ThemeType.LIGHT} themeMap={themeMap}>
        <Component {...pageProps} />
      </ThemeSwitcherProvider>
    </ThemeProvider>
  )

  return (
    <>
      <Head>
        <title>{applicationName}</title>
      </Head>
      <GlobalStyle {...themes[darkMode.value ? ThemeType.DARK : ThemeType.LIGHT]} />
      {mounted ? body : <div style={{ visibility: 'hidden' }}>{body}</div>}
    </>
  )
}

export default App
