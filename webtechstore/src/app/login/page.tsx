"use client";
import Link from "next/link";
import { useTheme } from "../../components/ThemeProvider";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <section className="w-full max-w-md">
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
          <p className="text-lg font-semibold mb-4">Entrar</p>
          <p className="text-sm font-medium text-secondary-color mb-4">
            Preencha suas informações abaixo para fazer login
          </p>

          <form className="flex flex-col gap-3">
            <label className="flex flex-col text-sm">
              <span className="mb-1">Email</span>
              <input
                type="email"
                placeholder="seu@exemplo.com"
                className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950 "
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="mb-1">Senha</span>
              <input
                type="password"
                placeholder="••••••••"
                className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border dark:bg-indigo-950 "
              />
            </label>

            <button
              type="submit"
              className="mt-2 px-4 py-2 rounded-md bg-indigo-900 text-white text-primary-foreground font-medium"
            >
              Entrar
            </button>
          </form>

          <p className="text-sm mt-4 text-muted-foreground text-center">
            Não tem uma conta?{" "}
            <Link
              href="/cadastro"
              className="text-primary hover:underline font-medium"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
