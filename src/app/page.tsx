
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-around bg-[url('/backgrounds/homeBackground.png')] bg-cover bg-center antialiased">
      
      <section className="flex flex-col gap-2 md:gap-5 items-center bg-white h-max max-w-[80%] md:max-w-min rounded-md md:rounded-2xl shadow-xl p-4 md:p-10">
        <h1 className="text-5xl md:text-9xl font-extrabold italic text-blue-600 text-nowrap">
          Easy Fly
        </h1>
        <p className="font-medium text-sm md:text-3xl p-2 text-slate-800 text-center">
          Search for the best flight options for your trip and get tips for your travel
        </p>
        <a href="/search" className="p-2 md:p-3 bg-blue-700 text-white rounded-md text-sm md:text-2xl font-semibold">
          Find a flight
        </a>
      </section>

    </main>
  );
}
