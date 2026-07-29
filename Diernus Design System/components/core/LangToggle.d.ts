/**
 * The PT/EN segmented pill in the top bar. Diernus is bilingual everywhere;
 * the choice persists in localStorage under `diernus-lang`.
 */
export interface LangToggleProps {
  value?: string;
  options?: string[];
  onChange?: (lang: string) => void;
  tone?: 'graphite' | 'ink';
  style?: React.CSSProperties;
}
export function LangToggle(props: LangToggleProps): JSX.Element;
