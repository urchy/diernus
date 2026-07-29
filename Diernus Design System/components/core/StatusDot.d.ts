/** Pulsing availability line used beside the contact form ("Lemos tudo · respondemos por email"). */
export interface StatusDotProps {
  tone?: 'amber' | 'cobalt';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function StatusDot(props: StatusDotProps): JSX.Element;
