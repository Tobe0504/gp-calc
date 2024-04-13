import FeatureCard from "@/app/components/FeatureCard/FeatureCard";
import React from "react";
import classes from "./HomePageFeatures.module.css";

const HomePageFeatures = () => {
  // Utils
  const features = [
    {
      title: "Grade Point Calculator",
      description:
        "Effortlessly calculate your GPA with our user-friendly grade point calculator.",
    },
    {
      title: "Personalized Insights",
      description:
        "Receive personalized insights and recommendations to optimize your academic performance.",
    },
    {
      title: "GPA Progress Tracking",
      description:
        "Visualize your semester GPA progress over time to stay on track towards academic success.",
    },
    {
      title: "Hypothetical Grade Jotter",
      description:
        "Experiment with hypothetical grades to see their impact on your overall GPA with our jotter feature.",
    },
    {
      title: "CGPA Projection",
      description:
        "Set your desired CGPA goal and track your progress towards achieving it with personalized projections.",
    },
    {
      title: "Mobile and Desktop Accessibility",
      description:
        "Access GP Calc anytime, anywhere, on your mobile devices or desktop.",
    },
  ];
  return (
    <section className={classes.container}>
      {features.map((data, i) => {
        return (
          <React.Fragment key={i}>
            <FeatureCard title={data.title} description={data.description} />
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default HomePageFeatures;
