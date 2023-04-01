import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrews Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
    <header className={styles.header}>
      <div>Welcome to Andrew Blanchettes Website!</div>


    </header>
    <div className={styles.myNavBar}>
    <Link href='philosophyPapers'  className={styles.myNavBarButton}>My Philosophy Papers</Link>
    </div>
    </>
  )
}
