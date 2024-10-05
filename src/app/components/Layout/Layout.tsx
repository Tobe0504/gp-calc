"use client";

import Footer from "@/app/containers/Footer/Footer";
import Header from "@/app/containers/Header/Header";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";
import classes from "./Layout.module.css";

type LayoutPropTypes = {
  children: React.ReactNode;
  useSecondLogo?: boolean;
  className?: string;
};

const Layout = ({ children, useSecondLogo, className }: LayoutPropTypes) => {
  // Context
  const { theme } = useContext(ThemeContext);

  return (
    <section className={classes.container} id={theme}>
      <header>
        <Header useSecondLogo={useSecondLogo} />
      </header>

      <section className={`${classes.body} ${className}`}>{children}</section>

      <footer className={classes.footer}>
        <Footer />
      </footer>
    </section>
  );
};

export default Layout;
