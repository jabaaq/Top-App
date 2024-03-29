"use client";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classNames";
import { P } from "@/components";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      <div>
        OwlTop © 2023 - {format(new Date(), "yyyy")} All rights reserved
      </div>
      <a href="#" target="_blank">
        Terms of use
      </a>
      <a href="#" target="_blank">
        Privacy Policy
      </a>
    </div>
  );
};
