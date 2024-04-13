import Layout from "@/app/components/Layout/Layout";
import HomePageHeroSection from "../HomePageHeroSection/HomePageHeroSection";
import HomePageTabs from "../HomePageTabs/HomePageTabs";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <HomePageHeroSection />
        <HomePageTabs />
      </div>
    </Layout>
  );
};

export default HomePage;
