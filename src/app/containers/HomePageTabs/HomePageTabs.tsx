"use client";

import SectionsNav from "@/app/components/SectionNav/SectionNav";
import { useEffect, useState } from "react";
import HomePageAboutaAndFaqs from "../HomePageAboutaAndFaqs/HomePageAboutaAndFaqs";
import HomePageFeatures from "../HomePageFeatures/HomePageFeatures";
import HomePageWhyChooseUs from "../HomePageWhyChooseUs/HomePageWhyChooseUs";
import classes from "./HomePageTabs.module.css";

const HomePageTabs = () => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "Features",
      isActive: true,
      activeComponent: <HomePageFeatures />,
      route: "features",
    },
    {
      title: "Why choose us?",
      isActive: false,
      activeComponent: <HomePageWhyChooseUs />,
      route: "why-choose-us",
    },

    {
      title: "About & FAQs",
      isActive: false,
      activeComponent: <HomePageAboutaAndFaqs />,
      route: "about-and-faqs",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex >= navItems.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prevState) => {
          return prevState + 1;
        });
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });
  useEffect(() => {
    const navItemsCopy = navItems.map((data, i) => {
      if (i === activeIndex) {
        return { ...data, isActive: true };
      } else {
        return { ...data, isActive: false };
      }
    });

    setNavItems(navItemsCopy);
  }, [activeIndex]);

  const activeComponent = navItems.find((component) => {
    return component.isActive;
  });

  return (
    <section className={classes.container}>
      <SectionsNav navItems={navItems} setNavItems={setNavItems} />

      <div className={classes.activeCOmponent}>
        {activeComponent.activeComponent}
      </div>
    </section>
  );
};

export default HomePageTabs;
