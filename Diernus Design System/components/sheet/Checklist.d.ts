/** Build/progress checklist — mono labels with 2px-radius squares that fill cobalt when done. */
export interface ChecklistProps {
  items?: Array<{ label: string; done?: boolean }>;
  /** blueprint (default) or bone */
  tone?: 'blueprint' | 'bone';
  style?: React.CSSProperties;
}
export function Checklist(props: ChecklistProps): JSX.Element;
