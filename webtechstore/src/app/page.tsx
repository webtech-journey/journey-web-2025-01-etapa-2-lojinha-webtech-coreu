import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col  py-15 px-6">
        <img
            src="/images/banner.png"
            alt="Webtech Store"
            className="object-cover "
          />
       
        <div className="mt-8 flex flex-col gap-6">
            <h1 className="text-lg sm:text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              <span className="inline-block">
                Produtos
                <span className="block h-1 bg-indigo-800 w-1/2 rounded-lg" />
              </span>
            </h1>
          
          <p className="max-w-md text-sm font-medium leading-8 text-secondary-color dark:text-zinc-400">
            Produtos da WebtechStore.
          </p>
        </div>
      </main>
    </div>
  );
}
