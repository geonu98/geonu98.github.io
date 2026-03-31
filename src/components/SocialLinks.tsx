import type { SocialLink } from "../types/portfolio";

interface SocialLinksProps {
  items: SocialLink[];
  compact?: boolean;
}

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
    <path d="M12 2C6.477 2 2 6.589 2 12.248C2 16.775 4.865 20.615 8.839 21.97C9.339 22.065 9.521 21.748 9.521 21.476C9.521 21.231 9.511 20.423 9.507 19.565C6.726 20.185 6.139 18.207 6.139 18.207C5.684 17.018 5.028 16.701 5.028 16.701C4.119 16.063 5.097 16.076 5.097 16.076C6.101 16.148 6.63 17.127 6.63 17.127C7.522 18.71 8.97 18.252 9.54 17.985C9.631 17.321 9.889 16.868 10.175 16.611C7.954 16.349 5.62 15.463 5.62 11.506C5.62 10.378 6.01 9.455 6.649 8.727C6.546 8.466 6.203 7.413 6.747 5.988C6.747 5.988 7.587 5.711 9.497 7.043C10.296 6.814 11.153 6.699 12.006 6.695C12.859 6.699 13.717 6.814 14.517 7.043C16.425 5.711 17.264 5.988 17.264 5.988C17.809 7.413 17.466 8.466 17.363 8.727C18.004 9.455 18.392 10.378 18.392 11.506C18.392 15.473 16.054 16.346 13.827 16.604C14.186 16.924 14.506 17.552 14.506 18.514C14.506 19.894 14.494 21.007 14.494 21.476C14.494 21.75 14.674 22.07 15.181 21.969C19.152 20.612 22.014 16.774 22.014 12.248C22.014 6.589 17.537 2 12 2Z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-none stroke-current stroke-[1.8]">
    <path d="M4 6.75H20C20.69 6.75 21.25 7.31 21.25 8V16C21.25 16.69 20.69 17.25 20 17.25H4C3.31 17.25 2.75 16.69 2.75 16V8C2.75 7.31 3.31 6.75 4 6.75Z" />
    <path d="M3.5 8L12 13.75L20.5 8" />
  </svg>
);

const ExternalArrow = () => (
  <span aria-hidden="true" className="text-xs">
    ↗
  </span>
);

const renderIcon = (label: string) => {
  if (label === "GitHub") {
    return <GitHubIcon />;
  }

  if (label === "Email") {
    return <EmailIcon />;
  }

  return <ExternalArrow />;
};

export const SocialLinks = ({ items, compact = false }: SocialLinksProps) => {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-ink-200 transition hover:border-accent-500/50 hover:bg-accent-500/10 hover:text-accent-400"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            title={item.label}
          >
            {renderIcon(item.label)}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <a
          key={item.label}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-ink-200 transition hover:border-accent-500/50 hover:text-accent-400"
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <span>{item.label}</span>
          <ExternalArrow />
        </a>
      ))}
    </div>
  );
};
