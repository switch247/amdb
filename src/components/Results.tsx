import Card from "./Card"
export default function Results({ results }: any) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result: { mal_id: any }) => (
        <Card key={result.mal_id} result={result} />
      ))}
    </div>
  );
}
