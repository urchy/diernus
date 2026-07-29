/** The reassurance list beside the contact form — amber haloed dots, short promises, no icons. */
export interface TrustListProps {
  items?: string[];
  tone?: 'blueprint' | 'bone';
  style?: React.CSSProperties;
}
export function TrustList(props: TrustListProps): JSX.Element;
