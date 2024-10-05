import { TOTAL_ONBOARDING_STEPS } from "@/app/utils/constants";
import React from "react";
import Layout from "../Layout/Layout";
import ProgressBar from "../ProgressBar/ProgressBar";
import classes from "./OnboardingLayout.module.css";

type OnboardingLayoutTypes = {
  progress?: number;
  children: React.ReactNode;
  className?: string;
};

const OnboardingLayout = ({
  progress,
  children,
  className,
}: OnboardingLayoutTypes) => {
  return (
    <Layout className={`${classes.container} ${className}`}>
      {progress && (
        <ProgressBar progress={progress} totalSteps={TOTAL_ONBOARDING_STEPS} />
      )}
      <div className={classes.body}>{children}</div>
    </Layout>
  );
};

export default OnboardingLayout;
