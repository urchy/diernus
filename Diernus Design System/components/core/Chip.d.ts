/** A mono uppercase pill used for jump-links, materials and deliverables. */
export interface ChipProps {
  /** renders an <a> and enables the hover darkening */
  href?: string;
  /** stamp = red outline (the "hot" chip); accent = cobalt */
  tone?: 'default' | 'accent' | 'stamp';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Chip(props: ChipProps): JSX.Element;
