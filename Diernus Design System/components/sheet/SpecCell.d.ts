/** One measurement in the technical-data grid: a huge black number, a mono unit, a mono caption. */
export interface SpecCellProps {
  value: React.ReactNode;
  /** rendered as a small mono subscript, e.g. "MM", "KG", "MM Ø" */
  unit?: string;
  label: string;
  style?: React.CSSProperties;
}
export function SpecCell(props: SpecCellProps): JSX.Element;
