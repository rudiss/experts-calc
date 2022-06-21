import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Calculator from '../components/Calculator'

const Home: NextPage = () => {
  return (
    <div>
      <Image src="/logo.svg"
      width={100} height={100} alt="logo"/>
    <Calculator/>
    </div>
  )
}

export default Home
