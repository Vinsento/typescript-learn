import { TagProps } from './Tag.props';
import styles from './Tag.module.scss';

export const Tag = ({
  children,
  size,
  bgColor = 'transparent',
  href = '',
}: TagProps) => {
  return href ? (
    <a
      href={href}
      className={`${styles[bgColor]} ${styles[size]} ${styles.link}`}
    >
      {children}
    </a>
  ) : (
    <div className={`${styles[bgColor]} ${styles[size]}`}>{children}</div>
  );
};
