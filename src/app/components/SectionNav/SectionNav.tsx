import React, { Dispatch, SetStateAction, useEffect } from "react";
import classes from "./SectionNav.module.css";
import { useRouter } from "next/navigation";

type SectionsNavTypes = {
  navItems: {
    title: string;
    isActive: boolean;
    route?: string;
  }[];
  setNavItems: Dispatch<
    SetStateAction<
      {
        title: string;
        isActive: boolean;
        route?: string;
      }[]
    >
  >;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  isRouting?: boolean;
};

const SectionsNav = ({
  navItems,
  setNavItems,
  style,
  containerStyle,
  isRouting,
}: SectionsNavTypes) => {
  // ROuter
  const router = useRouter();
  //   const { page } = router;

  // utils
  const activeChangeHandler = (index: number) => {
    const navCopy = [...navItems].map((datum, i) => {
      if (i === index) {
        return {
          ...datum,
          isActive: true,
        };
      }

      return {
        ...datum,
        isActive: false,
      };
    });
    setNavItems(navCopy);

    // if (isRouting) {
    //   navigate(
    //     `/profile/${navItems.find((data) => data.isActive)?.route as string}`
    //   );

    //   router.push(`${route as string}`)
    // }
  };

  useEffect(() => {
    // if (isRouting) {
    //   setNavItems(
    //     navItems.map((data) => {
    //       if (data?.route === ) {
    //         return {
    //           ...data,
    //           isActive: true,
    //         };
    //       } else {
    //         return {
    //           ...data,
    //           isActive: false,
    //         };
    //       }
    //     })
    //   );
    // }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.listNav} style={containerStyle}>
        {navItems.map((data, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                activeChangeHandler(i);
              }}
              className={
                data.isActive ? `${classes.activeDiv}` : `${classes.div}`
              }
              style={style}
            >
              <span>{data.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionsNav;
