// import { Movie } from "typings";
// import Thumbnail from "./Thumbnail";
// import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
// import { useRef, useState } from "react";

// interface Props {
//   title: string;
//   movies: Movie[];
// }

// function Carousel({ title, movies }: Props) {
//   const [chunkSize, setChunkSize] = useState(6);
//   const [chunkIndex, setChunkIndex] = useState(0);
//   const [isMoved, setIsMoved] = useState(false);
//   const chunks = movies.length
//     ? [
//         ...movies.slice(chunkIndex * chunkSize, (chunkIndex + 1) * chunkSize),
//         ...movies.slice(0, chunkSize),
//       ]
//     : [];

//   const rowRef = useRef<HTMLDivElement>(null);

//   const handleClick = (event: React.MouseEvent<HTMLDivElement>, direction: string) => {
//     event.preventDefault();
//     setIsMoved(true);
//     if (rowRef.current) {
//       const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;
  
//       const scrollTo =
//         direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
  
//       // Check if we have reached the end of the carousel
//       if (scrollTo >= scrollWidth - clientWidth) {
//         // If so, scroll back to the beginning
//         rowRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         const newChunkIndex = 0;
//         setChunkIndex(newChunkIndex);
//         setChunks([...movies.slice(newChunkIndex * chunkSize, (newChunkIndex + 1) * chunkSize)]);
//         setIsMoved(false);
//       } else if (scrollTo < 0) {
//         // If at the beginning, scroll to the end
//         rowRef.current.scrollTo({
//           left: scrollWidth - clientWidth,
//           behavior: "smooth",
//         });
//         const newChunkIndex = chunks.length - 1;
//         setChunkIndex(newChunkIndex);
//         setChunks([
//           ...movies.slice(newChunkIndex * chunkSize, (newChunkIndex + 1) * chunkSize),
//           ...movies.slice(0, chunkSize),
//         ]);
//         setIsMoved(false);
//       } else {
//         // Otherwise, scroll normally
//         rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
//         setChunkIndex(
//           direction === "left"
//             ? (chunkIndex + chunks.length - 1) % chunks.length
//             : (chunkIndex + 1) % chunks.length
//         );
//       }
//     }
//   };
  
  
//   return (
//     <div className="space-y-2">
//       <h2 className="text-xl font-bold">{title}</h2>
//       <div className="relative group md:-ml-2 ">
//       <IconChevronLeft
//             className={`absolute top-0 bottom-0 left-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === 0 ? "hidden" : ""
//         }`}
//         onClick={(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => handleClick(event, "left")}
//         />


//         <div className="flex items-center space-x-2 md:space-x-2.5 md:p-2 scrollbar-hide overflow-hidden min-w-0" ref={rowRef}>
//         {chunks.map((movie) => (
//             <Thumbnail key={movie.id} movie={movie} />
//         ))}
//         </div>


//         <IconChevronRight
//             className={`absolute top-0 bottom-0 right-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === chunks.length - 1 ? "hidden" : ""
//         }`}
//         onClick={(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => handleClick(event, "right")}
//         />
//       </div>
//     </div>
//   );
// }

// export default Carousel;
// import { Movie } from "typings";
// import Thumbnail from "./Thumbnail";
// import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
// import { useRef, useState } from "react";

// interface Props {
//   title: string;
//   movies: Movie[];
// }

// function Carousel({ title, movies }: Props) {
//   const [chunkSize, setChunkSize] = useState(6);
//   const [chunkIndex, setChunkIndex] = useState(0);
//   const [isMoved, setIsMoved] = useState(false);
  
//   const chunks = movies.length
//   ? [
//       ...movies.slice(chunkIndex * chunkSize, (chunkIndex + 1) * chunkSize),
//       ...movies.slice(0, chunkSize),
//     ]
//   : [];

//   const rowRef = useRef<HTMLDivElement>(null);
    
//   const handleClick = (event: React.MouseEvent<HTMLDivElement | SVGSVGElement, MouseEvent>, direction: string) => {
//     event.preventDefault();
//     setIsMoved(true);
//     if (rowRef.current) {
//       const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;
  
//       const scrollTo =
//         direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
  
//       if (scrollTo >= scrollWidth - clientWidth) {
//         // Scroll to the beginning and update state on scroll event
//         rowRef.current.scrollTo({
//           left: 0,
//           behavior: "smooth",
//         });
//         rowRef.current.addEventListener('scroll', handleScroll);
//       } else if (scrollTo < 0) {
//         // Scroll to the end and update state on scroll event
//         rowRef.current.scrollTo({
//           left: scrollWidth - clientWidth,
//           behavior: "smooth",
//         });
//         rowRef.current.addEventListener('scroll', handleScroll);
//       } else {
//         // Scroll normally and update state immediately
//         rowRef.current.scrollTo({
//           left: scrollTo,
//           behavior: "smooth",
//         });
//         setChunkIndex(
//           direction === "left"
//             ? (chunkIndex + chunks.length - 1) % chunks.length
//             : (chunkIndex + 1) % chunks.length
//         );
//         setIsMoved(false);
//       }
//     }
//   };
  
//   // const handleScroll = () => {
//   //   if (rowRef.current) {
//   //     const { scrollLeft, clientWidth } = rowRef.current;
//   //     if (scrollLeft % clientWidth === 0) {
//   //       setChunkIndex(scrollLeft / clientWidth);
//   //       setIsMoved(false);
//   //       rowRef.current.removeEventListener('scroll', handleScroll);
//   //     }
//   //   }
//   // };
//   const handleScroll = () => {
//     if (rowRef.current) {
//       const { scrollLeft, clientWidth } = rowRef.current;
//       if (scrollLeft % clientWidth === 0) {
//         setChunkIndex(scrollLeft / clientWidth);
//         setIsMoved(false);
//         rowRef.current.removeEventListener('scroll', handleScroll); // add this line
//       }
//     }
//   };

  
//   return (
//     <div className="space-y-2">
//       <h2 className="text-xl font-bold">{title}</h2>
//       <div className="relative group md:-ml-2 ">
//       <IconChevronLeft
//         className={`absolute top-0 bottom-0 left-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === 0 ? "hidden" : ""
//         }`}
//         onClick={(event: React.MouseEvent<HTMLDivElement | SVGSVGElement, MouseEvent>) => handleClick(event, "left")}
//         />

//         <div className="flex items-center space-x-2 md:space-x-2.5 md:p-2 scrollbar-hide overflow-hidden min-w-0" ref={rowRef}>
//           {chunks.map((movie) => (
//             <Thumbnail key={movie.id} movie={movie} />
//           ))}
//         </div>
//         <IconChevronRight
//             className={`absolute top-0 bottom-0 right-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//                 chunkIndex === chunks.length - 1 ? "hidden" : ""
//             }`}
//             onClick={(event: React.MouseEvent<HTMLDivElement | SVGSVGElement, MouseEvent>) => handleClick(event, "right")}
//             />
        
//       </div>
//     </div>
//   );
// }

// export default Carousel;







// import { Movie } from "typings";
// import { useState, useEffect, useRef } from "react";
// import Thumbnail from "./Thumbnail";
// import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

// interface Props {
//   title: string;
//   movies: Array<any>;
//   breakpoint: number;
// }

// const Carousel = ({ title, movies, breakpoint }: Props) => {
//   const [chunkSize, setChunkSize] = useState(0);
//   const [chunkIndex, setChunkIndex] = useState(0);
//   const [chunks, setChunks] = useState<Array<any>>([]);
//   const rowRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const updateSize = () => {
//       if (window.innerWidth < breakpoint) {
//         setChunkSize(1);
//       } else {
//         setChunkSize(5);
//       }
//     };

//     window.addEventListener("resize", updateSize);

//     updateSize();

//     return () => window.removeEventListener("resize", updateSize);
//   }, [breakpoint]);

//   useEffect(() => {
//     setChunks(
//       movies.reduce(
//         (resultArray, item, index) => {
//           const chunkIndex = Math.floor(index / chunkSize);

//           if (!resultArray[chunkIndex]) {
//             resultArray[chunkIndex] = [];
//           }

//           resultArray[chunkIndex].push(item);

//           return resultArray;
//         },
//         [] as any[]
//       )
//     );
//   }, [chunkSize, movies]);

//   const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, direction: string) => {
//     event.preventDefault();
//     if (direction === "left") {
//       setChunkIndex(chunkIndex - 1);
//     } else {
//       setChunkIndex(chunkIndex + 1);
//     }
//   };

//   return (
//     <div className="space-y-2">
//       <h2 className="text-xl font-bold">{title}</h2>
//       <div className="relative group md:-ml-2 ">
//         <IconChevronLeft
//           className={`absolute top-0 bottom-0 left-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === 0 ? "hidden" : ""
//           }`}
//           onClick={(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => handleClick(event, "left")}
//         />

//         <div
//           className="flex items-center space-x-2 md:space-x-2.5 md:p-2 scrollbar-hide overflow-hidden min-w-0"
//           ref={rowRef}
//         >
//           {chunks.map((movie) => (
//             <Thumbnail key={movie.id} movie={movie} />
//           ))}
//         </div>

//         <IconChevronRight
//           className={`absolute top-0 bottom-0 right-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === chunks.length - 1 ? "hidden" : ""
//           }`}
//           onClick={(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => handleClick(event, "right")}
//         />
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// import React, { useState, useEffect, useRef } from "react";
// import Thumbnail from "./Thumbnail";
// import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

// type CarouselProps = {
//   title: string;
//   movies: any[];
//   size?: number;
// };

// const Carousel: React.FC<CarouselProps> = ({
//   title,
//   movies,
//   size = 6,
// }: CarouselProps) => {
//   const rowRef = useRef<HTMLDivElement>(null);
//   const [chunkSize, setChunkSize] = useState<number>(size);
//   const [chunkIndex, setChunkIndex] = useState<number>(0);
//   const [chunks, setChunks] = useState<any[]>([]);

//   useEffect(() => {
//     const newChunks: any[] = [];

//     for (let i = 0; i < movies.length; i += chunkSize) {
//       newChunks.push(movies.slice(i, i + chunkSize));
//     }

//     setChunks(newChunks);
//   }, [movies, chunkSize]);

//   useEffect(() => {
//     setChunkIndex(0);
//   }, [chunkSize]);

// //   const handleClick = (event: React.MouseEvent<HTMLDivElement>, direction: string) => {
// //     event.preventDefault();

// //     if (direction === "left") {
// //       if (chunkIndex > 0) {
// //         setChunkIndex(chunkIndex - 1);
// //       }
// //     } else {
// //       if (chunkIndex < chunks.length - 1) {
// //         setChunkIndex(chunkIndex + 1);
// //       }
// //     }
// //   };
// const handleClick = (
//     event: React.MouseEvent<HTMLDivElement>,
//     direction: "left" | "right"
//   ) => {
//     const row = rowRef.current;
//     const rowWidth = row.offsetWidth;
//     const chunksCount = chunks.length;
//     const chunkWidth = rowWidth / chunksCount;
//     const chunksPerPage = Math.floor(rowWidth / chunkWidth);
  
//     if (direction === "left") {
//       setChunkIndex((prev) => {
//         const newIndex = prev - chunksPerPage;
//         if (newIndex < 0) {
//           return 0;
//         }
//         return newIndex;
//       });
//     } else {
//       setChunkIndex((prev) => {
//         const newIndex = prev + chunksPerPage;
//         if (newIndex > chunksCount - 1) {
//           return 0;
//         }
//         return newIndex;
//       });
//     }
//   };


//   return (
//     <div className="space-y-2">
//       <h2 className="text-xl font-bold">{title}</h2>
//       <div className="relative group md:-ml-2 ">
//         <IconChevronLeft
//           className={`absolute top-0 bottom-0 left-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === 0 ? "hidden" : ""
//           }`}
//           onClick={(event: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
//             handleClick(event, "left")
//           }
//         />

//         <div
//           className="flex items-center space-x-2 md:space-x-2.5 md:p-2 scrollbar-hide overflow-hidden min-w-0"
//           ref={rowRef}
//         >
//           {chunks[chunkIndex]?.map((movie) => (
//             <Thumbnail key={movie.id} movie={movie} />
//           ))}
//         </div>

//         <IconChevronRight
//           className={`absolute top-0 bottom-0 right-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === chunks.length - 1 ? "hidden" : ""
//           }`}
//           onClick={(event: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
//             handleClick(event, "right")
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// import React, { useState, useEffect, useRef } from "react";
// import Thumbnail from "./Thumbnail";
// import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
// import { Movie } from "typings";


// type CarouselProps = {
//   title: string;
//   movies: Movie[];
//   size?: number;
// };

// const Carousel: React.FC<CarouselProps> = ({
//   title,
//   movies,
//   size = 6,
// }: CarouselProps) => {
//   const rowRef = useRef<HTMLDivElement>(null);
//   const [chunkSize, setChunkSize] = useState<number>(size);
//   const [chunkIndex, setChunkIndex] = useState<number>(0);
//   const [chunks, setChunks] = useState<Movie[][]>([]);

//   useEffect(() => {
//     const newChunks: Movie[][] = [];

//     for (let i = 0; i < movies.length; i += chunkSize) {
//       newChunks.push(movies.slice(i, i + chunkSize));
//     }

//     setChunks(newChunks);
//   }, [movies, chunkSize]);

//   useEffect(() => {
//     setChunkIndex(0);
//   }, [chunkSize]);

//   const handleClick = (
//     event: React.MouseEvent<SVGSVGElement, MouseEvent>,
//     direction: "left" | "right"
//   ) => {
//     const row = rowRef.current;
//     if (row) {
//       const rowWidth = row.offsetWidth;
//       const chunksCount = chunks.length;
//       const chunkWidth = rowWidth / chunksCount;
//       const chunksPerPage = Math.floor(rowWidth / chunkWidth);

//       if (direction === "left") {
//         setChunkIndex((prev) => {
//           const newIndex = prev - chunksPerPage;
//           if (newIndex < 0) {
//             return 0;
//           }
//           return newIndex;
//         });
//       } else {
//         setChunkIndex((prev) => {
//           const newIndex = prev + chunksPerPage;
//           if (newIndex > chunksCount - 1) {
//             return 0;
//           }
//           return newIndex;
//         });
//       }
//     }
//   };

//   return (
//     <div className="space-y-2">
//       <h2 className="text-xl font-bold">{title}</h2>
//       <div className="relative group md:-ml-2">
//         <IconChevronLeft
//           className={`absolute top-0 bottom-0 left-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === 0 ? "hidden" : ""
//           }`}
//           onClick={(event) => handleClick(event, "left")}
//         />

//         <div
//           className="flex items-center space-x-2 md:space-x-2.5 md:p-2 scrollbar-hide overflow-hidden min-w-0"
//           ref={rowRef}
//         >
//           {chunks[chunkIndex]?.map((movie) => (
//             <Thumbnail key={movie.id} movie={movie} />
//           ))}
//         </div>

//         <IconChevronRight
//           className={`absolute top-0 bottom-0 right-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === chunks.length - 1 ? "hidden" : ""
//           }`}
//           onClick={(event) => handleClick(event, "right")}
//         />
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// import React, { useState, useEffect, useRef } from "react";
// import Thumbnail from "./Thumbnail";
// import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
// import { Movie } from "typings";

// type CarouselProps = {
//   title: string;
//   movies: Movie[];
//   size?: number;
// };

// const Carousel: React.FC<CarouselProps> = ({
//   title,
//   movies,
//   size = 6,
// }: CarouselProps) => {
//   const rowRef = useRef<HTMLDivElement>(null);
//   const [chunkSize, setChunkSize] = useState<number>(size);
//   const [chunkIndex, setChunkIndex] = useState<number>(0);
//   const [chunks, setChunks] = useState<Movie[][]>([]);

//   useEffect(() => {
//     const newChunks: Movie[][] = [];

//     for (let i = 0; i < movies.length; i += chunkSize) {
//       newChunks.push(movies.slice(i, i + chunkSize));
//     }

//     setChunks(newChunks);
//   }, [movies, chunkSize]);

//   useEffect(() => {
//     setChunkIndex(0);
//   }, [chunkSize]);

//   const handleClick = (
//     event: React.MouseEvent<SVGSVGElement, MouseEvent>,
//     direction: "left" | "right"
//   ) => {
//     const row = rowRef.current;
//     if (row) {
//       const rowWidth = row.offsetWidth;
//       const chunksCount = chunks.length;
//       const chunkWidth = rowWidth / chunksCount;
//       const chunksPerPage = Math.floor(rowWidth / chunkWidth);

//       if (direction === "left") {
//         setChunkIndex((prev) => {
//           const newIndex = prev - chunksPerPage;
//           if (newIndex < 0) {
//             return 0;
//           }
//           return newIndex;
//         });
//       } else {
//         setChunkIndex((prev) => {
//           const newIndex = prev + chunksPerPage;
//           if (newIndex > chunksCount - 1) {
//             return 0;
//           }
//           return newIndex;
//         });
//       }
//     }
//   };

//   return (
//     <div className="space-y-2">
//       <h2 className="text-xl font-bold">{title}</h2>
//       <div className="relative group md:-ml-2">
//         <IconChevronLeft
//           className={`absolute top-0 bottom-0 left-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === 0 ? "hidden" : ""
//           }`}
//           onClick={(event) => handleClick(event, "left")}
//         />

//         <div
//           className="flex items-center space-x-2 md:space-x-2.5 md:p-2 scrollbar-hide overflow-x-scroll overflow-hidden min-w-0"
//           ref={rowRef}
//         >
//           {chunks[chunkIndex]?.map((movie) => (
//             <Thumbnail key={movie.id} movie={movie} />
//           ))}
//         </div>

//         <IconChevronRight
//           className={`absolute top-0 bottom-0 right-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
//             chunkIndex === chunks.length - 1 ? "hidden" : ""
//           }`}
//           onClick={(event) => handleClick(event, "right")}
//         />
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import { Movie } from "typings";
import Thumbnail from "./Thumbnail";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { useRef, useState } from "react";

interface Props {
  title: string;
  movies: Movie[];
}

function Carousel({ title, movies }: Props) {
  const [chunkIndex, setChunkIndex] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const chunkSize = Math.min(6, movies.length); // set chunkSize to be at most 6 or the length of movies

  const chunks = movies.length
  ? [
      ...movies.slice(chunkIndex * chunkSize, (chunkIndex + 1) * chunkSize),
      ...movies.slice(0, chunkSize),
    ]
  : [];

  const rowRef = useRef<HTMLDivElement>(null);
    
  const handleClick = (event: React.MouseEvent<HTMLDivElement | SVGSVGElement, MouseEvent>, direction: string) => {
    event.preventDefault();
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;
  
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
  
      if (scrollTo >= scrollWidth - clientWidth) {
        // Scroll to the beginning and update state on scroll event
        rowRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        rowRef.current.addEventListener('scroll', handleScroll);
      } else if (scrollTo < 0) {
        // Scroll to the end and update state on scroll event
        rowRef.current.scrollTo({
          left: scrollWidth - clientWidth,
          behavior: "smooth",
        });
        rowRef.current.addEventListener('scroll', handleScroll);
      } else {
        // Scroll normally and update state immediately
        rowRef.current.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
        setChunkIndex(
          direction === "left"
            ? (chunkIndex + chunks.length - 1) % chunks.length
            : (chunkIndex + 1) % chunks.length
        );
        setIsMoved(false);
      }
    }
  };
  
  // const handleScroll = () => {
  //   if (rowRef.current) {
  //     const { scrollLeft, clientWidth } = rowRef.current;
  //     if (scrollLeft % clientWidth === 0) {
  //       setChunkIndex(scrollLeft / clientWidth);
  //       setIsMoved(false);
  //       rowRef.current.removeEventListener('scroll', handleScroll);
  //     }
  //   }
  // };
  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      if (scrollLeft % clientWidth === 0) {
        setChunkIndex(scrollLeft / clientWidth);
        setIsMoved(false);
        rowRef.current.removeEventListener('scroll', handleScroll); // add this line
      }
    }
  };

    return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="relative group md:-ml-2 ">
      <IconChevronLeft
        className={`absolute top-0 bottom-0 left-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            chunkIndex === 0 ? "hidden" : ""
        }`}
        onClick={(event: React.MouseEvent<HTMLDivElement | SVGSVGElement, MouseEvent>) => handleClick(event, "left")}
        />

        <div className="flex items-center space-x-2 md:space-x-2.5 md:p-2 scrollbar-hide overflow-hidden min-w-0" ref={rowRef}>
          {chunks.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <IconChevronRight
            className={`absolute top-0 bottom-0 right-0 m-auto h-9 w-9 duration-200 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
                chunkIndex === chunks.length - 1 ? "hidden" : ""
            }`}
            onClick={(event: React.MouseEvent<HTMLDivElement | SVGSVGElement, MouseEvent>) => handleClick(event, "right")}
            />
        
      </div>
    </div>
  );
}

export default Carousel;