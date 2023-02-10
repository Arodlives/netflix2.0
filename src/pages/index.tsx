import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from 'components/Header'
import Banner from 'components/Banner'
import requests from 'utils/request'
import {Movie} from 'typings'
import Row from 'components/Row'

const inter = Inter({ subsets: ['latin'] })

interface Props{
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]

}




const Home = ({netflixOriginals,
  actionMovies,comedyMovies,documentaries,horrorMovies,romanceMovies,topRated,trendingNow,
  }: Props)=>{
  return (
    //? 😮‍💨Add color styles/themes option using state 
    <div className="relative h-screen w-screen bg-gradient-to-b from-transparent/10 to-[#376df6] lg:h-[100%] lg:w-[100vw]">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Aaron's Netflix 2.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {/* Header */}
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        {/*Banner*/}
        <Banner netflixOriginals={netflixOriginals}/>
        <section>
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home

export const getServerSideProps = async ()=>{
  const [
    //* can be optimized
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    //*resolves all requests
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return{
    props:{
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }

}