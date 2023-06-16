import Head from 'next/head'
import philPageStyles from '@/styles/philosophyPapersStyles.module.css';
import Link from'next/link'
import PaperBlock from '../components/paper-block'
import TwentyQuestionsComp from  '../components/20Questions'

export default function myPage() {

  
  return (
    <>
    <div className={philPageStyles.myBackground}>
      <Head>
        <title>Andrews Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <header className={philPageStyles.header}>
  <Link href='/' className={philPageStyles.backButton}><div className={philPageStyles.backButtonA}>Home</div></Link>
    <div>20 Questions Game! (WIP)</div>
    </header>

    <div><TwentyQuestionsComp/></div>
    </div>
    </>
  )
}