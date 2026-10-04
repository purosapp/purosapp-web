type IconProps = { className?: string };

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.22 1.88.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function DiscordIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.55 3.02A13.2 13.2 0 0 0 10.3 2l-.16.32c1.2.3 1.76.72 2.36 1.25a10.6 10.6 0 0 0-9 0c.6-.53 1.27-.99 2.36-1.25L5.7 2a13.2 13.2 0 0 0-3.25 1.02C.4 6.08-.16 9.06.12 12a13.3 13.3 0 0 0 4 2l.86-1.4c-.47-.17-.92-.4-1.35-.65l.33-.25a9.5 9.5 0 0 0 8.08 0l.33.25c-.43.26-.88.48-1.35.66l.86 1.39a13.3 13.3 0 0 0 4-2c.33-3.4-.56-6.36-2.33-8.98ZM5.35 10.2c-.79 0-1.43-.72-1.43-1.6s.63-1.6 1.43-1.6c.8 0 1.44.72 1.43 1.6 0 .88-.63 1.6-1.43 1.6Zm5.3 0c-.79 0-1.43-.72-1.43-1.6s.63-1.6 1.43-1.6c.8 0 1.44.72 1.43 1.6 0 .88-.63 1.6-1.43 1.6Z" />
    </svg>
  );
}
