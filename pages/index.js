import Head from 'next/head'
import FormLog from './components/formlog'
import Header from './components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container-fluid g-0">
      <Head>Página Administrativa da Biblioteca Digital do IFMS</Head>
      <div className={styles.main}>
      <FormLog/>
      </div>
    </div>
  )
}
