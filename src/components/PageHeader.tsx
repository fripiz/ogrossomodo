type Props = {
  title: string;
  intro?: string;
};

export default function PageHeader({ title, intro }: Props) {
  return (
    <div className="border-b border-forest/10 bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-display text-4xl text-forest sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 text-lg text-ink/80">{intro}</p>}
      </div>
    </div>
  );
}
