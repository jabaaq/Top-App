import { FooterProps } from "./Footer.props";
import styles from "./Sidebar.module.css";
import cn from "classNames";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};
