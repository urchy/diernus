/** A moodboard tile for the horizontal marquee — smaller mount than SketchCard, with a coloured room-type dot. */
export interface MoodFigureProps {
  src: string;
  alt: string;
  /** mono caption, e.g. "SALA DE ESTAR · I" */
  caption: string;
  /** dot colour keys the room type: amber = living, cobalt = bedroom/office, red = kids */
  dot?: string;
  rotate?: number;
  height?: string;
  style?: React.CSSProperties;
}
export function MoodFigure(props: MoodFigureProps): JSX.Element;
