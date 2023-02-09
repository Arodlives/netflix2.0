//* get these by console logging the const {netflixoriginals,etc..}

export interface Genre {
    id: number
    name: string
}

export interface Movie {
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export interface Element {
    type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser'
}
// The "d.ts" file is used to provide typescript 
// type information about an API that's written in JavaScript.
// The idea is that you're using something like jQuery or underscore, 
// an existing javascript library. You want to consume those from your typescript code.

// Rather than rewriting jquery or underscore or 
// whatever in typescript, you can instead write the d.ts file,
// which contains only the type annotations. 
// Then from your typescript code you get the typescript benefits of static type
//  checking while still using a pure JS library.

// This works thanks to TypeScript's constraint of not letting you add the
//  ".ts" extension at the end of the import statement. Because of that, 
//  when you reference some file, let's say, my-module.js, 
//  if there is a my-module.d.ts next to it, then TypeScript will include its content:
//type / interface -allows extending