/** The post-submit banner: cobalt-tinted for success, amber-tinted for failure, with an optional mono retry pill. */
export interface FormFeedbackProps {
  tone?: 'success' | 'error';
  /** label for the inline retry pill */
  action?: string;
  onAction?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function FormFeedback(props: FormFeedbackProps): JSX.Element;
