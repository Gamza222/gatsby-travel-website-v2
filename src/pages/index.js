import React from 'react'
import Email from '../components/Email'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Trips from '../components/Trips'

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Trips heading={'Our Favourite Destinations'}/>
      <Testimonials />
      <Stats />
      <Email />
    </Layout>
  )
}
