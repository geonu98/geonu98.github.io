interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="mb-8 space-y-3">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-500">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-ink-50 sm:text-3xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-ink-200 sm:text-base">
        {description}
      </p>
    </div>
  );
};
