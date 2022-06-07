import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja | Home</title>
      <meta name='keywords' content='tutorial' />
    </Head>
    <div>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus nemo, harum debitis velit ut
          illum et mollitia voluptates autem facilis molestiae assumenda temporibus quidem error impedit provident
          repellendus nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, hic? Necessitatibus
          nesciunt, reprehenderit tenetur pariatur saepe sunt doloribus a dolor eveniet qui? Incidunt eaque sapiente
          iste eos velit soluta fugiat
    </p>
    <p className={styles.text}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus nemo, harum debitis velit ut
          illum et mollitia voluptates autem facilis molestiae assumenda temporibus quidem error impedit provident
          repellendus nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, hic? Necessitatibus
          nesciunt, reprehenderit tenetur pariatur saepe sunt doloribus a dolor eveniet qui? Incidunt eaque sapiente
          iste eos velit soluta fugiat
    </p>
    <Link href="/ninjas">
      <a className={styles.btn}> See Ninja Listing</a>
    </Link>
  </div>
  </>
  )
}
