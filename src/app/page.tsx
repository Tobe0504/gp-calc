import Layout from "./components/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
