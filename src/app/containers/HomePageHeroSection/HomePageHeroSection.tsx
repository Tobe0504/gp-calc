"use client";

import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import classes from "./HomePageHeroSection.module.css";

const HomePageHeroSection = () => {
  // Router
  const router = useRouter();
  return (
    <section className={classes.container}>
      <div className={classes.leftSection}>
        <h4>Achieve Academic Excellence with GP Calc.</h4>
        <p>
          Effortlessly track and improve your grades with our powerful <br />{" "}
          grade point calculator and personalized insights.
        </p>
        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              router.push("/sign-up");
            }}
          >
            Get Started
          </Button>
          <Button>Try GP Calc.</Button>
        </div>
      </div>
    </section>
  );
};

export default HomePageHeroSection;
