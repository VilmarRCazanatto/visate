import styled from 'styled-components'
import { useEffect } from 'react'

import '../styles/globals.css'
import { Header, Footer } from '../components'

const LayContainer = styled.div`
  position: relative;
  width: 100vw;
  height: calc(var(--vh) - 23px);
  padding: 81px 7px 7px 7px;
`

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    let root = document.querySelector(':root')
    root.style.setProperty('--vh', `${window.innerHeight}px`)
  })
  
  return (
    <>
      <Header />
      <LayContainer>
        <Component {...pageProps} />
      </LayContainer>
      <Footer />
    </>
  )
}

export default MyApp
