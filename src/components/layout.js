import React from 'react'
import Header from './Header'
import { GlobalStyle } from './styles/GlobalStyles'
import Footer from './Footer'

export default function Layout( {children }) {
  return (
    <>
    <GlobalStyle />
    <Header />
        <main>{children}</main>
    <Footer />
    </>
  )
}
