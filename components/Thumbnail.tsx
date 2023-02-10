import { Movie } from "typings"
import Image from "next/image"

interface Props{
    //movie:Movie | DocumentData when using firebase
    movie:Movie  
}


//* object destructuring
function Thumbnail({movie}:Props) {
  return (
    <div className="relative h-60 min-w-[400px] cursor-pointer transition duration-200 ease-out md:h-65 md:mw-420px md:hover:scale-105">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded "
        fill alt="Movie tumbnail"/>
    </div>
  )
}

export default Thumbnail