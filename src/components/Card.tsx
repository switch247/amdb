import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }:any) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/anime/${result.mal_id}`}>
        <img src={`${result.images.jpg.image_url}`}
           width={500}
           height={300}
           className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
           style={{
             maxWidth: "100%",
             height: "300px",
           }}
           placeholder="blur"
          //  blurDataURL="/spinner.svg"
           alt="image is not available"/>
      {/* <Image
        src={`${result.images.jpg.image_url}`}
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "300px",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        /> */}
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview || result.synopsis}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.title_english || result.title_japanese}
          </h2>
          <p className="flex items-center"> 
            {result.release_date || result.aired.string}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}