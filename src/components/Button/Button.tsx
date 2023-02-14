import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import Arrow from "./button_arrow.svg";

export const Button = ({
  children,
  appearance,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button className={`${styles.button} ${styles[appearance]}`} {...props}>
      {children}
      {arrow !== "none" && (
        <span className={`${styles.arrow} ${styles[arrow]}`}>
          <Arrow />
        </span>
      )}
    </button>
  );
};
