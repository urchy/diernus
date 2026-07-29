/**
 * An entry in the list of materials: a texture swatch above a code, name,
 * description and a dashed-rule supplier reference.
 * @startingPoint section="Sheet" subtitle="Texture swatch, code, name, supplier ref" viewport="700x400"
 */
export interface MaterialCardProps {
  /** red mono code, e.g. "A1 · WDF-05" */
  code?: string;
  name: string;
  /** built-in swatch, or any CSS background string */
  texture?: 'burl' | 'velvet' | 'stripe' | string;
  /** mono footer under a dashed rule, e.g. "REF. ZFBY-10 (BLUE-10)" */
  supplierRef?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function MaterialCard(props: MaterialCardProps): JSX.Element;
