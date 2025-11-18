import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Sobre Nós - Webtech Store",
  description: "Conheça mais sobre a Webtech Store",
};

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col py-8 px-6">
        <h1 className="text-3xl font-bold mb-6">Sobre Nós</h1>
        <div className="space-y-4 text-muted-foreground">
          <p>Bem-vindo à Webtech Store, sua loja de tecnologia de confiança.</p>
          <p>
            Oferecemos os melhores produtos tecnológicos com qualidade e preços
            competitivos. Nossa missão é tornar a tecnologia acessível para
            todos.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
