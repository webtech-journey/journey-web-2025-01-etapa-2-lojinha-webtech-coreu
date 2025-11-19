"use client";
import Link from "next/link";
import { useTheme } from "../../components/ThemeProvider";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CadastroPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [form, setForm] = useState({
    nome: "",
    dataNascimento: "",
    telefone: "",
    cep: "",
    cidade: "",
    endereco: "",
    numero: "",
    bairro: "",
    complemento: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (!file) return setPreview(null);
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não conferem.");
      return;
    }
    // Aqui você pode enviar os dados para a API
    console.log("Dados do cadastro:", form);
    alert("Cadastro realizado com sucesso!");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <section className="w-full max-w-2xl">
          <div className="rounded-lg p-6 bg-login dark:bg-indigo-950 text-card-foreground border-2 dark:border-indigo-900">
            <Link href="/" className="mb-8">
              <img
                src={
                  mounted && theme === "dark"
                    ? "/images/Logo-dark.png"
                    : "/images/Logo-light.png"
                }
                alt="Webtech Store"
                className="object-cover w-40 items-center my-4 justify-center mx-auto sm:w-48 md:w-52"
              />
            </Link>

            <p className="text-lg font-semibold mb-4">Cadastro de Usuário</p>
            <p className="text-sm font-medium text-secondary-color mb-4">
              Preencha suas informações abaixo para realizar seu cadastro
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Foto de perfil no topo */}
              <div className="flex flex-col items-center mb-6">
                <span className="text-sm mb-2">Foto de perfil (opcional)</span>
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-24 h-24 rounded-full border-2 border-dashed border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center relative overflow-hidden"
                    aria-label="Selecionar foto de perfil"
                  >
                    {preview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={preview}
                        alt="Foto de perfil"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="32"
                        height="32"
                        className="text-gray-400 dark:text-gray-500"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17,8 12,3 7,8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    )}
                  </button>
                  {preview && (
                    <button
                      type="button"
                      onClick={() => {
                        setPreview(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Remover foto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                      >
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Primeira linha: Nome completo e Data de Nascimento */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Nome completo</span>
                  <input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Data de Nascimento</span>
                  <input
                    name="dataNascimento"
                    value={form.dataNascimento}
                    onChange={handleChange}
                    type="date"
                    required
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
              </div>

              {/* Segunda linha: Telefone e CEP */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Telefone</span>
                  <input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  <span className="mb-1">CEP</span>
                  <input
                    name="cep"
                    value={form.cep}
                    onChange={handleChange}
                    placeholder="00000-000"
                    required
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
              </div>

              {/* Terceira linha: Cidade e Endereço */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Cidade</span>
                  <input
                    name="cidade"
                    value={form.cidade}
                    onChange={handleChange}
                    placeholder="São Paulo"
                    required
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Endereço</span>
                  <input
                    name="endereco"
                    value={form.endereco}
                    onChange={handleChange}
                    placeholder="Rua das Flores"
                    required
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
              </div>

              {/* Quarta linha: Número e Bairro */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Número</span>
                  <input
                    name="numero"
                    value={form.numero}
                    onChange={handleChange}
                    placeholder="123"
                    required
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Bairro</span>
                  <input
                    name="bairro"
                    value={form.bairro}
                    onChange={handleChange}
                    placeholder="Centro"
                    required
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
              </div>

              {/* Quinta linha: Complemento e E-mail */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Complemento</span>
                  <input
                    name="complemento"
                    value={form.complemento}
                    onChange={handleChange}
                    placeholder="Apto 12 (opcional)"
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  <span className="mb-1">E-mail</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="seu@exemplo.com"
                    required
                    className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950"
                  />
                </label>
              </div>

              {/* Sexta linha: Senha e Confirmar Senha */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Senha</span>
                  <div className="relative">
                    <input
                      name="senha"
                      value={form.senha}
                      onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="px-3 py-2 pr-10 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950 w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      aria-label={
                        showPassword ? "Ocultar senha" : "Mostrar senha"
                      }
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="16"
                          height="16"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="16"
                          height="16"
                        >
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      )}
                    </button>
                  </div>
                </label>
                <label className="flex flex-col text-sm">
                  <span className="mb-1">Confirmar Senha</span>
                  <div className="relative">
                    <input
                      name="confirmarSenha"
                      value={form.confirmarSenha}
                      onChange={handleChange}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="px-3 py-2 pr-10 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950 w-full"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      aria-label={
                        showConfirmPassword ? "Ocultar senha" : "Mostrar senha"
                      }
                    >
                      {showConfirmPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="16"
                          height="16"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="16"
                          height="16"
                        >
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      )}
                    </button>
                  </div>
                </label>
              </div>

              {/* Botão de cadastrar */}
              <button
                type="submit"
                className="mt-2 px-4 py-2 rounded-md bg-indigo-900 text-white font-medium"
              >
                Cadastrar
              </button>
            </form>

            <p className="text-sm mt-4 text-muted-foreground text-center">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                Faça o login aqui
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
