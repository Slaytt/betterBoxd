import { tmdbService } from "@/services/tmdb";
import Image from "next/image";

export default async function Home() {
  const movies = await tmdbService.getTrendingMovies();

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter">BetterBoxd</h1>
        <p className="text-zinc-400">Tendances du moment</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie: any) => (
          <div key={movie.id} className="group cursor-pointer">
            <div className="relative aspect-[2/3] overflow-hidden rounded-md border border-zinc-800 transition-all group-hover:border-zinc-500">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h2 className="mt-2 font-medium text-sm truncate">{movie.title}</h2>
            <p className="text-zinc-500 text-xs">{new Date(movie.release_date).getFullYear()}</p>
          </div>
        ))}
      </div>
    </main>
  );
}