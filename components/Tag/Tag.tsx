import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classNames";

export const Tag = ({
  size = "s",
  children,
  className,
  color = "ghost",
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.red]: color === "red",
        [styles.primary]: color === "primary",
        [styles.s]: size === "s",
        [styles.m]: size === "m",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
};
