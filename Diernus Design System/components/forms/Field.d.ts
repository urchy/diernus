/** A labelled input or textarea. Labels are mono uppercase; the required marker and all error states are amber, never red. */
export interface FieldProps {
  label: string;
  id: string;
  required?: boolean;
  type?: string;
  /** set to render a textarea */
  rows?: number;
  /** mono uppercase error message shown below */
  error?: string;
  /** placeholders are italic and conversational */
  placeholder?: string;
  /** blueprint = the dark contact panel; bone = light surfaces */
  tone?: 'blueprint' | 'bone';
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): JSX.Element;
