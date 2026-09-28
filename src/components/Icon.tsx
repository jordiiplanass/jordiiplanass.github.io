const paths = {
  systems: ['M12 3 21 8 12 13 3 8 12 3Z', 'M3 13 12 18 21 13'],
  tools: ['M8 8 4 12 8 16', 'M16 8 20 12 16 16', 'M13 6 11 18'],
  lead: ['M5 21 5 4', 'M5 5 16 5 14 8.5 16 12 5 12'],
  cv: ['M14 3 6 3 6 21 18 21 18 7 14 3Z', 'M14 3 14 7 18 7', 'M12 10 12 16', 'M9 13 12 16 15 13'],
  menu: ['M4 7h16M4 12h16M4 17h16'],
  close: ['M6 6 18 18M18 6 6 18'],
};

export type IconName = keyof typeof paths;

interface Props {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className, strokeWidth = 1.7 }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
