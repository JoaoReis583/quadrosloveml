import "./globals.css";
import Link from "next/link";
import { Figtree } from "next/font/google";

const sans = Figtree({ subsets: ["latin"], variable: "--font-sans" });
export const metadata = { title: "Anúncios ML" };

const nav = [
  { label: "Visão geral", href: "/", ready: true },
  { label: "Novo anúncio", href: "/anuncios/novo", ready: false },
  { label: "Publicados", href: "/anuncios?status=published", ready: false },
  { label: "Rascunhos", href: "/anuncios?status=draft", ready: false },
  { label: "Modelos", href: "/modelos", ready: false },
  { label: "Histórico", href: "/historico", ready: false },
  { label: "Conexão Mercado Livre", href: "/conexao", ready: false },
  { label: "Configurações", href: "/configuracoes", ready: false },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={sans.variable}>
      <body className="font-sans md:flex min-h-screen">
        <aside className="md:w-60 md:shrink-0 md:min-h-screen border-b md:border-b-0 md:border-r border-line bg-white">
          <div className="px-5 py-4 font-semibold tracking-tight">Anúncios ML</div>
          <nav className="flex md:flex-col gap-1 overflow-x-auto px-3 pb-3 md:pb-0">
            {nav.map((n) =>
              n.ready ? (
                <Link key={n.href} href={n.href} className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium bg-canvas">
                  {n.label}
                </Link>
              ) : (
                <span key={n.href} title="Em desenvolvimento" className="whitespace-nowrap rounded-md px-3 py-2 text-sm text-muted">
                  {n.label}
                </span>
              )
            )}
          </nav>
        </aside>
        <main className="flex-1 p-5 md:p-10 max-w-5xl">{children}</main>
      </body>
    </html>
  );
}
