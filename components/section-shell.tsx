export function SectionShell({
  title,
  eyebrow,
  description,
  children,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
            {eyebrow}
          </p>
        )}

        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-3 text-sm text-slate-600 dark:text-white/60">
            {description}
          </p>
        )}
      </div>

      <div className="mt-10">{children}</div>
    </section>
  );
}
