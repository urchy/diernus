/** The handwritten amber margin note (Caveat) — a human aside pinned beside a heading. */
export interface HandNoteProps {
  /** degrees of tilt; the site uses -2.5 */
  rotate?: number;
  size?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function HandNote(props: HandNoteProps): JSX.Element;
