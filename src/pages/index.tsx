import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from'next/link'


export default function Home() {
  return (
    <>
      <header>
        <title>Andrews Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div className={styles.footer}></div>
      </header>
    </>
  );
}
