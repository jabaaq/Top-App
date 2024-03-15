import { Span } from "next/dist/trace";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classNames";
import ArrowIcon from "./Arrow.svg";
import { IoIosArrowForward } from "react-icons/io";

export const Button = ({
  children,
  appearance,
  arrow = "none",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <IoIosArrowForward />
        </span>
      )}
    </button>
  );
};
