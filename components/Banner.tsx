
// import Image from 'next/image';
// import { Movie } from 'typings';
// import { useState, useEffect } from 'react';
// import { baseUrl } from 'constants/movie';
// import styles from '@/styles/Home.module.css'

// interface Props{
//   netflixOriginals: Movie[]
// }


// function Banner({netflixOriginals}:Props) {
//   const [movie,setMovie]=useState<Movie|null>(null)


//   useEffect(()=>{
//     //? Generates a random index depeninding on the movie list length
//     setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])

//   },[netflixOriginals])

//   return (
//     <div>

//       <div className={styles.backdrop}>
//         <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt="movie image"   height={300} width={500} sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw" priority />
//       </div>


//     </div>
//   )
// }

// export default Banner
import Image from 'next/image';
import { Movie } from 'typings';
import { useState, useEffect } from 'react';
import { baseUrl } from 'constants/movie';
import styles from '@/styles/Home.module.css'
import {BsFillPlayFill} from 'react-icons/bs'
import { IconInfoCircle } from '@tabler/icons-react';

interface Props{
  netflixOriginals: Movie[]
}


function Banner({netflixOriginals}:Props) {
  const [movie,setMovie]=useState<Movie|null>(null)


  useEffect(()=>{
    //? Generates a random index depeninding on the movie list length
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])

  },[netflixOriginals])

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>

      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt="movie image" fill={true} style={{objectFit: 'cover',}} sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw" priority />
      </div>

    <h1 className='text-2xl lg:text-7xl font-bold md:text-4xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
    <p className='max-w-xs text-shadow text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{movie?.overview}</p>
    
    <div className='flex space-x-3'>
      <button className='bannerButton bg-white text-black'><BsFillPlayFill className='h-4 w-4 text-black md:h-7 md:w-7 '/>Play</button>
      <button className='bannerButton bg-[gray]/70'><IconInfoCircle className='h-8 w-8 md:h-10 md-w-10 '/>More Info</button>
    </div>
    

    </div>
  )
}

export default Banner