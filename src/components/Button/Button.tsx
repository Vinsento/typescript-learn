import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";

export const Button = ({ children, appearance }: ButtonProps): JSX.Element => {
    return <button className={`${styles.button} ${styles[appearance]}`}>{children}</button>
}