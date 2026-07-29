/**
 * The one button on a Diernus surface: a mono, uppercase, fully-rounded pill.
 * @startingPoint section="Core" subtitle="Cobalt pill, ghost outline, compact bar variant" viewport="700x200"
 */
export interface ButtonProps {
  /** primary = cobalt fill + blue cast shadow; ghost = hairline outline; bar = compact fill used in the top bar */
  variant?: 'primary' | 'ghost' | 'bar';
  /** md is the page CTA (.95rem 1.7rem); sm is the top-bar pill */
  size?: 'sm' | 'md';
  /** renders an <a> when set */
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
