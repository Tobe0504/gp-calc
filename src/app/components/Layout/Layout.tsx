import Footer from "@/app/containers/Footer/Footer";
import Header from "@/app/containers/Header/Header";
import classes from "./Layout.module.css";

type LayoutPropTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPropTypes) => {
  return (
    <section className={classes.container}>
      <header>
        <Header />
      </header>

      <section className={classes.body}>{children}</section>

      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Layout;
