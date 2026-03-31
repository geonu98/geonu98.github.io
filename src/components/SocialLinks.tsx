import type { SocialLink } from "../types/portfolio";

interface SocialLinksProps {
  items: SocialLink[];
  compact?: boolean;
}

export const SocialLinks = ({ items, compact = false }: SocialLinksProps) => {
  return (
    <div className={`flex ${compact ? "flex-wrap gap-3" : "gap-4"}`}>
      {items.map((item) => (
        <a
          key={item.label}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-ink-200 transition hover:border-accent-500/50 hover:text-accent-400"
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <span>{item.label}</span>
          <span aria-hidden="true" className="text-xs">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
};
