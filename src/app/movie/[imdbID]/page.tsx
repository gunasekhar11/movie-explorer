import MovieDetails from "@/components/MovieDetails";

export default function MovieDetailsPage({ params }: { params: any }) {
  return <MovieDetails imdbID={params.imdbID} />;
}
