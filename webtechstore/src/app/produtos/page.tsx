import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Produtos - Webtech Store",
  description: "Veja todos os nossos produtos",
};

export default function ProdutosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col py-8 px-6">
        <h1 className="text-3xl font-bold mb-6">Produtos</h1>
        <p className="text-muted-foreground">
          Esta é a página de produtos. Aqui você encontrará todos os produtos
          disponíveis em nossa loja.
        </p>
      </main>
    </div>
  );
}
