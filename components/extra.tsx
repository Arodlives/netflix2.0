//   const handleClick = (direction: string) => {
//     if (rowRef.current) {
//       const { scrollLeft, clientWidth } = rowRef.current;

//       const maxScrollLeft = rowRef.current.scrollWidth - clientWidth;
//       let newScrollLeft =
//         direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
//       if (newScrollLeft < 0) {
//         newScrollLeft = maxScrollLeft;
//         setChunkIndex((chunkIndex + chunks.length - 1) % chunks.length);
//       } else if (newScrollLeft > maxScrollLeft) {
//         newScrollLeft = 0;
//         setChunkIndex((chunkIndex + 1) % chunks.length);
//       }
//       rowRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
//     }
//   };
// const handleClick = (direction: string) => {
//     setIsMoved(true);
//     if (rowRef.current) {
//       const { clientWidth } = rowRef.current;
  
//       if (direction === "left") {
//         rowRef.current.scrollBy({
//           left: -1 * clientWidth,
//           behavior: "smooth",
//         });
//         setChunkIndex((chunkIndex + chunks.length - 1) % chunks.length);
//       } else {
//         rowRef.current.scrollBy({
//           left: clientWidth,
//           behavior: "smooth",
//         });
//         setChunkIndex((chunkIndex + 1) % chunks.length);
//       }
//     }
//   };