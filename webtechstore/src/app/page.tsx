import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center py-20 px-6">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="mt-8 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bem-vindo ao Webtech Store
          </h1>
          <p className="max-w-md text-lg leading-8 text-finish-button dark:text-zinc-400">
            Este é um exemplo de página inicial com navbar e suporte a tema
            claro/escuro.
          </p>
        </div>
      </main>
    </div>
  );
}
