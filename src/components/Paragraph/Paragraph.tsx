import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.scss';

export const Paragraph = ({
  fontSize = 'm',
  children,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p className={`${styles[fontSize]}`} {...props}>
      {children}
    </p>
  );
};
