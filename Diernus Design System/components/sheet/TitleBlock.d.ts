/**
 * The drafting-sheet title block: a ruled strip of label/value pairs
 * (sheet number, scale, revision, date) that anchors a page like a real drawing.
 * @startingPoint section="Sheet" subtitle="Ruled strip of sheet no. / scale / rev / date" viewport="700x120"
 */
export interface TitleBlockProps {
  items?: Array<{ label: string; value: string }>;
  style?: React.CSSProperties;
}
export function TitleBlock(props: TitleBlockProps): JSX.Element;
