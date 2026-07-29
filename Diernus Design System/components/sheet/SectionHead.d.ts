/**
 * The standard opening of a Diernus "sheet" section: mono kicker, huge uppercase
 * heading, italic lede. Every content section on the site starts with this.
 * @startingPoint section="Sheet" subtitle="Kicker + uppercase heading + italic lede" viewport="700x300"
 */
export interface SectionHeadProps {
  /** mono uppercase kicker, e.g. "LISTA DE MATERIAIS" */
  kicker?: string;
  /** sentence-case in source, rendered uppercase */
  title?: string;
  /** italic supporting sentence */
  lede?: string;
  /** blueprint flips the whole block to ink-on-navy */
  tone?: 'bone' | 'blueprint';
  style?: React.CSSProperties;
}
export function SectionHead(props: SectionHeadProps): JSX.Element;
