/** Full-width cobalt submit for the contact form. Unlike Button it is square-ish (--radius-md), sentence-case and set in the display face. */
export interface SubmitButtonProps {
  loading?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SubmitButton(props: SubmitButtonProps): JSX.Element;
