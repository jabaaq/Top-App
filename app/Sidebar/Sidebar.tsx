"use client";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classNames";
import { createContext } from "react";

const SidebarContext = createContext({});

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <SidebarContext.Provider value={{}}>
      <div {...props}>Sidebar</div>
    </SidebarContext.Provider>
  );
};
