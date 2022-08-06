import Head from 'next/head'
import Header from './components/header'

export default function Home() {
  return (
    <div className="container-fluid g-0">
      <Head>Página Inicial</Head>
      <Header/>
    </div>
  )
}
