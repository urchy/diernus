/**
 * A hand sketch pinned to the page with a strip of masking tape — white paper
 * mount, mono caption bar, slight rotation, long soft cast shadow.
 * @startingPoint section="Media" subtitle="Taped photo mount with mono caption" viewport="700x400"
 */
export interface SketchCardProps {
  src: string;
  alt: string;
  /** mono caption, left side, e.g. "VITRINE · RETALHO" */
  title: string;
  /** mono caption, right side, e.g. "ESBOÇO 01" */
  index?: string;
  /** tape colour — the site alternates amber and sage translucents */
  tape?: string;
  /** degrees; the site uses -1.2 to +1.4 */
  rotate?: number;
  /** crop to 3:2, anchored to the bottom of the image */
  crop?: boolean;
  style?: React.CSSProperties;
}
export function SketchCard(props: SketchCardProps): JSX.Element;
