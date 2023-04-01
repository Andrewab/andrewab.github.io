import Head from 'next/head'
import philPageStyles from '@/styles/philosophyPapersStyles.module.css';
import Link from'next/link'
import PaperBlock from '../components/paper-block'


export default function myPage() {

  
  return (
    <>
      <Head>
        <title>Andrews Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <header className={philPageStyles.header}>
    <div>My Philosphy Papers</div>

      <Link href='/' className={philPageStyles.backButton}>
      <div className={philPageStyles.backButtonA}>Home</div>
      </Link>
    </header>

      <main>
        <div>
          <PaperBlock/>
        </div>
      </main>

    </>
  )
}
