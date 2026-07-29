/**
 * A production note — the heavy-outlined card the workshop reads before cutting.
 * @startingPoint section="Sheet" subtitle="Heavy-outlined production note with red kicker" viewport="700x220"
 */
export interface NoteCardProps {
  /** red mono kicker, e.g. "NOTA · MONTAGEM" */
  kicker?: string;
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function NoteCard(props: NoteCardProps): JSX.Element;
