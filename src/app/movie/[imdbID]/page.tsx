import MovieDetails from "@/components/MovieDetails";

export default function MovieDetailsPage({ params }: { params: { imdbID: string } }) {
  return <MovieDetails imdbID={params.imdbID} />;
}