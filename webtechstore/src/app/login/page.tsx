export const metadata = {
  title: "Login - Webtech Store",
  description: "Página de login simples",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="w-full max-w-md">
        <div className="rounded-lg shadow-md p-6 bg-card text-card-foreground">
          <h1 className="text-2xl font-semibold mb-4">Entrar</h1>

          <form className="flex flex-col gap-3">
            <label className="flex flex-col text-sm">
              <span className="mb-1">Email</span>
              <input
                type="email"
                placeholder="seu@exemplo.com"
                className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border"
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="mb-1">Senha</span>
              <input
                type="password"
                placeholder="••••••••"
                className="px-3 py-2 rounded-md bg-popover text-popover-foreground border border-border"
              />
            </label>

            <button
              type="submit"
              className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium"
            >
              Entrar
            </button>
          </form>

          <p className="text-sm mt-4 text-muted-foreground">
            Não tem uma conta? Cadastre-se
          </p>
        </div>
      </section>
    </main>
  );
}
