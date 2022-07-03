import Results from "@/components/Results";
export default async function Home({ searchParams }: any) {
  try {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    const results = data.data || [];
    const genre = searchParams.genre || "fetchTrending";

    return (
      <>
        <div>
          {results.length === 0 && (
            <h1 className="text-center pt-6">No results found</h1>
          )}
          {/* <ul>
            {results.map((res: any, index: number) => (
              <li key={index}>{res.mal_id}</li>
            ))}
          </ul> */}
          <Results results={results}/>

        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}
