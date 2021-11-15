import '../styles/globals.css'
import '@shopify/polaris/build/esm/styles.css'

import { AppProvider } from '@shopify/polaris'
import jaTranslations from '@shopify/polaris/locales/ja.json'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider i18n={jaTranslations}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
