import { db } from "@/lib/db";
export const dynamic = "force-dynamic";

const label: Record<string, string> = { draft: "Rascunho", published: "Publicado", error: "Com erro", paused: "Pausado" };

export default async function Home() {
  const [published, drafts, errors, recent] = await Promise.all([
    db.listing.count({ where: { status: "published" } }),
    db.listing.count({ where: { status: "draft" } }),
    db.listing.count({ where: { status: "error" } }),
    db.listing.findMany({ orderBy: { updatedAt: "desc" }, take: 8 }),
  ]);
  const stats = [
    { name: "Publicados", value: published },
    { name: "Rascunhos", value: drafts },
    { name: "Com erro", value: errors },
  ];

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Visão geral</h1>
        <button disabled className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white opacity-50" title="Próxima etapa">
          Novo anúncio
        </button>
      </div>

      <dl className="mt-8 grid grid-cols-3 divide-x divide-line rounded-lg border border-line bg-white">
        {stats.map((s) => (
          <div key={s.name} className="px-5 py-4">
            <dt className="text-sm text-muted">{s.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tabular-nums">{s.value}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-10 text-sm font-medium text-muted">Atualizados recentemente</h2>
      {recent.length === 0 ? (
        <p className="mt-3 rounded-lg border border-dashed border-line bg-white p-8 text-sm text-muted">
          Você ainda não tem anúncios. Crie o primeiro para vê-lo aqui.
        </p>
      ) : (
        <ul className="mt-3 divide-y divide-line rounded-lg border border-line bg-white">
          {recent.map((l) => (
            <li key={l.id} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
              <span className="truncate">{l.title}</span>
              <span className="shrink-0 text-muted">{label[l.status] ?? l.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
