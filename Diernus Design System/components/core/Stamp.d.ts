/** The red approval stamp rotated onto a drawing when a revision is signed off. */
export interface StampProps {
  label?: string;
  /** small second line, e.g. "28/05/2026 · DIERNUS" */
  sub?: string;
  /** degrees; the site uses -8 */
  rotate?: number;
  style?: React.CSSProperties;
}
export function Stamp(props: StampProps): JSX.Element;
