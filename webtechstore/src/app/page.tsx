import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const produtos = [
  {
    id: 1,
    nome: "Boné Webtech",
    preco: "45,00",
    imagem: "/images/bone.png",
  },
  {
    id: 2,
    nome: "Adesivo Webtech",
    preco: "15,00",
    imagem: "/images/adesivo.png",
  },
  {
    id: 3,
    nome: "Caneca Webtech",
    preco: "25,00",
    imagem: "/images/caneca.png",
  },
  {
    id: 4,
    nome: "Camisa Webtech",
    preco: "35,00",
    imagem: "/images/camisa.png",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />

        <img
          src="/images/banner.png"
          alt="Webtech Store"
          className="object-cover sm:max-w-4xl sm:flex-1 sm:mx-auto sm:mt-5 "
        />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col  py-12 px-8 sm:px-4">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl sm:text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <span className="inline-block">
              Produtos
              <span className="block h-1 bg-indigo-800 w-1/2 rounded-lg" />
            </span>
          </h1>

          <section className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {produtos.map((produto) => (
                <ProductCard
                  key={produto.id}
                  nome={produto.nome}
                  preco={produto.preco}
                  imagem={produto.imagem}
                />
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <a
                href="/produtos"
                className="bg-background border-2 border-gray-200 dark:border-gray-700 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)] dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:drop-shadow-[6px_6px_0px_rgba(0,0,0,0.4)] dark:hover:drop-shadow-[6px_6px_0px_rgba(255,255,255,0.2)] transition-all  px-4 py-2 text-sm font-medium "
              >
                Ver mais
              </a>
            </div>
          </section>
        </div>

        <div className="mt-3 flex flex-col gap-6">
            <h1 className="text-xl sm:text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <span className="inline-block">
              Categorias
              <span className="block h-1 bg-indigo-800 w-1/2 rounded-lg" />
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
}
