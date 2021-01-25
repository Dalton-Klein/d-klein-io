import '../src/styles/globals.css'
import { ThemeProvider } from 'theme-ui'
import theme from '../src/styles/theme'
import Nav from '../src/components/nav'
import { useState, useEffect } from 'react'
import  fetchProjects from '../services/projectservice'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={ theme }>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
