/** Hairline-ruled grid that holds SpecCells — the gaps ARE the rules (1px gap over a hairline background). */
export interface SpecGridProps {
  /** 6 on desktop, 3 below 1100px, 2 below 520px */
  columns?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SpecGrid(props: SpecGridProps): JSX.Element;
