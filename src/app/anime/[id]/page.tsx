// import Image from "next/image";

async function getMovie(movieId: string) {
  const res = await fetch(
    `https://api.jikan.moe/v4/anime/${movieId}/full`
  );
  return await res.json();
}

export default async function MoviePage({ params }: any) {
  const movieId = params.id;
  const d = await getMovie(movieId);
  const movie = d.data;
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <img src={`${movie.images?.jpg?.image_url}`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "300px",
          }}
          placeholder="blur"
          //  blurDataURL="/spinner.svg"
          alt="image is not available" />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            <a href={movie.url}>
              {movie.title || movie.name}
            </a>
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Score:</span>
            {movie.score}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-semibold mr-1">Scored By:</span>
            {movie.scored_by}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-semibold mr-1">rank:</span>
            {movie.rank}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-semibold mr-1">popularity:</span>
            {movie.popularity}
          </p>

          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Members:</span>
            {movie.members}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-semibold mr-1">Favorites:</span>
            {movie.favorites}  
            </p>

          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">season:</span>
            {movie.season}&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-semibold mr-1">year:</span>
            {movie.year}
          </p>


          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Synopsis:</span>
            {movie.synopsis}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.aired.string}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.rating}
          </p>

          <p className="mb-3">
            <span className="font-semibold mr-1">studios:</span>
            {(movie.studios).map((studio) => (
            <span key={studio.mal_id}>{studio.name}</span>
          ))}
          </p>
          
          <p className="mb-3">
            <span className="font-semibold mr-1">genres:</span>
            {(movie.genres).map((opening) => (
            <span key={opening.mal_id}>{opening.name} &nbsp;&nbsp; </span>
          ))}
          </p>

          <iframe src={movie.trailer.embed_url} frameborder="0"></iframe>

          <div>

          <p>themes:</p>
          {(movie.theme.openings).map((opening) => (
            <span key={opening}>{opening}</span>
            
          ))}
          <br />
          {(movie.theme.endings).map((ending) => (
            <span key={ending}>{ending}</span>
          ))}
                      
                      </div>




        </div>
      </div>
    </div>
  );

}



// "duration": "24 min per ep",
// "rating": "R - 17+ (violence & profanity)",
// "score": 9.1,
// "scored_by": 2066418,
// "rank": 2,
// "popularity": 3,
// "members": 3255832,
// "favorites": 221591,