import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from 'components/Header'
import Banner from 'components/Banner'
import requests from 'utils/request'
import {Movie} from 'typings'

import Carousel from 'components/Carousel'

const inter = Inter({ subsets: ['latin'] })

interface Props{
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  adventureMovies: Movie[]
  animationMovies: Movie[]
  crimeMovies: Movie[]
  dramaMovies: Movie[]
  familyMovies: Movie[]
  fantasyMovies: Movie[]
  historyMovies: Movie[]
  musicMovies: Movie[]
  mysteryMovies: Movie[]
  sciencefictionMovies: Movie[]
  tvMovies: Movie[]
  thrillerMovies: Movie[]
  warMovies: Movie[]
  westernMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]

}




const Home = ({netflixOriginals,
  actionMovies,comedyMovies,documentaries,horrorMovies,romanceMovies,topRated,trendingNow,
  }: Props)=>{
  return (
    //? 😮‍💨Add color styles/themes option using state #376df6
    <div className="relative h-screen w-screen bg-gradient-to-b from-transparent/10 to-[#141414]  city: lg:h-[100%] lg:w-[100vw] duration-300">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Aaron's Netflix 2.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {/* Header */}
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16 '>
        {/*Banner*/}
        <Banner netflixOriginals={netflixOriginals}/>
        <section>
          <Carousel title="Trending Now" movies={trendingNow} />
          <Carousel title="Top Rated" movies={topRated} />
          <Carousel title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          {/* {list.length > 0 && <Carousel title="My List" movies={list} />} */}

          <Carousel title="Comedies" movies={comedyMovies} />
          <Carousel title="Scary Movies" movies={horrorMovies} />
          <Carousel title="Romance Movies" movies={romanceMovies} />
          <Carousel title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home

//* passes data as a prop to the component Row
export const getServerSideProps = async ()=>{
  const [
    //* can be optimized
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    adventureMovies,
    animationMovies,
    crimeMovies,
    comedyMovies,
    dramaMovies,
    familyMovies,
    fantasyMovies,
    historyMovies,
    horrorMovies,
    musicMovies,
    mysteryMovies,
    sciencefictionMovies,
    tvMovies, 
    thrillerMovies,
    warMovies, 
    westernMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    //*resolves all requests
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchAdventureMovies).then((res) => res.json()),
    fetch(requests.fetchAnimationMovies).then((res) => res.json()),
    fetch(requests.fetchCrimeMovies).then((res) => res.json()),
    fetch(requests.fetchDramaMovies).then((res) => res.json()),
    fetch(requests.fetchFamilyMovies).then((res) => res.json()),
    fetch(requests.fetchFantasyMovies).then((res) => res.json()),
    fetch(requests.fetchHistoryMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchMusicMovies).then((res) => res.json()),
    fetch(requests.fetchMysteryMovies).then((res) => res.json()),
    fetch(requests.fetchScienceFictionMovies).then((res) => res.json()),
    fetch(requests.fetchTVMovies).then((res) => res.json()),
    fetch(requests.fetchThrillerMovies).then((res) => res.json()),
    fetch(requests.fetchWarMovies).then((res) => res.json()),
    fetch(requests.fetchWesternMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return{
    props:{
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      adventureMovies:adventureMovies.results,
      animationMovies:animationMovies.results,
      comedyMovies: comedyMovies.results,
      crimeMovies:crimeMovies.results,
      documentaries: documentaries.results,
      dramaMovies:dramaMovies.results,
      familyMovies:familyMovies.results,
      fantasyMovies:fantasyMovies.results,
      historyMovies:historyMovies.results,
      horrorMovies: horrorMovies.results,
      musicMovies:musicMovies.results,
      mysteryMovies:mysteryMovies.results,
      romanceMovies: romanceMovies.results,
      sciencefictionMovies:sciencefictionMovies.results,
      tvMovies:tvMovies.results,
      thrillerMovies:thrillerMovies.results,
      warMovies:warMovies.results,
      westernMovies:westernMovies.results,
    },
  }

}