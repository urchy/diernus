/** One row of the revision-control log on a blueprint section. */
export interface RevisionItemProps {
  /** "R1", "R2", "R3" */
  rev: string;
  date: string;
  /** "PEDIDO CLIENTE" / "VALIDADA" */
  status: string;
  /** the latest revision gets a red filled tag */
  latest?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function RevisionItem(props: RevisionItemProps): JSX.Element;
