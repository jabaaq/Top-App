import { HeaderProps } from "./Header.props";
import styles from "./Sidebar.module.css";
import cn from "classNames";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
