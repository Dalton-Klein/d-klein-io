/** @jsxRuntime classic /
// pages/index.jsx
/** @jsx jsx */
import Head from 'next/head'
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default () => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <Head>
      <title>d.klein.io</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>d.klein.io</h1>
    </div>
  </div> 
)
