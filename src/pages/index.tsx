import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from 'components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    //? 😮‍💨Add color styles/themes option using state 
    <div className="relative h-screen bg-gradient-to-b from-transparent/10 to-[#376df6] lg:h-[140vh]">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Aaron's Netflix 2.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {/* Header */}
      <main>
        {/*Banner*/}
        <section>
          {/*Row */}
          {/*Row */}
          {/*Row */}
          {/*Row */}
          {/*Row */}
          {/*Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}
