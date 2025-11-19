"use client";

import { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Users,
  Trophy,
  Envelope,
  Phone,
  MapPin,
} from "phosphor-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SobrePage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-indigo-950 text-white py-20 px-6 sm:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                Sobre a <span className="text-yellow-400">Webtech Store</span>
              </h1>
              <p className="text-md md:text-lg text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                Sua loja de tecnologia moderna, criada por estudantes para
                revolucionar a experiência de compra online
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A Webtech Store nasceu como um projeto acadêmico na PUC
                    Minas, desenvolvida por estudantes apaixonados por
                    tecnologia e inovação. Nossa missão é criar uma experiência
                    de compra única e moderna.
                  </p>
                  <p>
                    Utilizando as tecnologias mais avançadas como Next.js, React
                    e TypeScript, construímos uma plataforma que combina
                    performance, design moderno e funcionalidades intuitivas.
                  </p>
                  <p>
                    Nosso foco está em oferecer produtos de qualidade com uma
                    interface amigável, sistema de carrinho inteligente e
                    experiência responsiva em todos os dispositivos.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:border dark:border-gray-700 dark:bg-background rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-indigo-100 dark:bg-indigo-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <ShoppingCart
                        size={32}
                        className="text-indigo-600 dark:text-white dark:text-indigo-400"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      E-commerce Moderno
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Interface intuitiva
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 dark:bg-indigo-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Users
                        size={32}
                        className="text-indigo-600 dark:text-white dark:text-indigo-400"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      Feito por Estudantes
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Projeto acadêmico
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 dark:bg-indigo-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Trophy
                        size={32}
                        className="text-indigo-600 dark:text-white dark:text-indigo-400"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground">Qualidade</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Produtos selecionados
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 dark:bg-indigo-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Heart
                        size={32}
                        className="text-indigo-600 dark:text-white dark:text-indigo-400"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground">Paixão</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Feito com amor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologias Utilizadas */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Tecnologias Utilizadas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossa loja foi desenvolvida com as tecnologias mais modernas do
                mercado
              </p>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
              {[
                { name: "Next.js 15", desc: "Framework React" },
                { name: "TypeScript", desc: "Tipagem estática" },
                { name: "Tailwind CSS", desc: "Estilização" },
                { name: "React Context", desc: "Gerenciamento de estado" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 border border-border text-center"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Informações de Contato */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Entre em Contato
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Tem alguma dúvida, sugestão ou quer saber mais sobre nosso
                  projeto? Adoraríamos ouvir de você! Nossa equipe está sempre
                  disponível para ajudar.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center">
                      <Envelope
                        size={24}
                        className="text-yellow-600 dark:text-yellow-400"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        contato@webtechstore.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center">
                      <Phone
                        size={24}
                        className="text-yellow-600 dark:text-yellow-400"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Telefone
                      </h3>
                      <p className="text-muted-foreground">(31) 3319-4444</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center">
                      <MapPin
                        size={24}
                        className="text-yellow-600 dark:text-yellow-400"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Localização
                      </h3>
                      <p className="text-muted-foreground">
                        PUC Minas - Lourdes
                        <br />
                        Belo Horizonte, MG
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <div className="bg-background dark:bg-gray-900 border border-border rounded-xl p-8 text-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Envie sua Mensagem
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-lg border border-border dark:bg-gray-900 text-foreground focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-border dark:bg-gray-900 text-foreground focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                      placeholder="Sobre o que você gostaria de falar?"
                      className="w-full px-4 py-3 rounded-lg border border-border dark:bg-gray-900 text-foreground focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Conte-nos mais detalhes sobre sua dúvida ou sugestão..."
                      className="w-full px-4 py-3 rounded-lg border border-border dark:bg-gray-900 text-foreground focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-800 hover:bg-indigo-950 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:ring-2  "
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
