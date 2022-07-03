import Results from "@/components/Results";

async function getSearch(params:string) {
    const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${params}&order_by=title&sort=asc&limit=25`
    );
    return await res.json();
  }
  

export default async function SearchPage({ params }:any) {
    const term = params.searchTerm;
    const movie = await getSearch(term);
    // console.log(movie)
    const results = movie.data;
    return (
        <div>
            {results && results.length === 0 && (
                <h1 className="text-center pt-6">No results found</h1>
            )}

            {results && <Results results={results} />}
        </div>
    );
}