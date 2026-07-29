/** The mono kicker that opens every Diernus section ("FICHA TÉCNICA", "CAPÍTULO 03"). */
export interface EyebrowProps {
  /** accent = cobalt (default); stamp = red for production notes; ink = pale blue on blueprint */
  tone?: 'accent' | 'stamp' | 'muted' | 'ink';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
