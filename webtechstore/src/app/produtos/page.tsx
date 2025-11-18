import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";

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

export const metadata = {
  title: "Produtos - Webtech Store",
  description: "Veja todos os nossos produtos",
};

export default function ProdutosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col py-8 px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Produtos</h1>
          <p className="text-muted-foreground">
            Confira todos os produtos disponíveis em nossa loja.
          </p>
        </div>

        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtos.map((produto) => (
              <ProductCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                imagem={produto.imagem}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
