/**
 * The Diernus wordmark. Diernus has no drawn logo — the mark IS the name set in
 * letterspaced uppercase mono. Never substitute a drawn symbol.
 */
export interface WordmarkProps {
  href?: string;
  /** CSS font-size; .8rem in the top bar, 1.15rem on large surfaces */
  size?: string;
  /** graphite on bone surfaces, ink on blueprint surfaces */
  tone?: 'graphite' | 'ink';
  /** colour the name cobalt (bone) / amber (blueprint) */
  accent?: boolean;
  style?: React.CSSProperties;
}
export function Wordmark(props: WordmarkProps): JSX.Element;
