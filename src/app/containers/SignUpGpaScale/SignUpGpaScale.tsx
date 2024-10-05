import Button from "@/app/components/Button/Button";
import Checkbox from "@/app/components/Checkbox/Checkbox";
import useUpdateSearchParams from "@/app/hooks/useUpdateSearchParams";
import { activeToggler } from "@/app/utils/activeToggler";
import { GRADE_POINT_SCALES } from "@/app/utils/constants";
import { useMemo, useState } from "react";
import classes from "./SignUpGpaScale.module.css";

const SignUpGpaScale = () => {
  // States
  const [gradePoints, setGradePoints] = useState(GRADE_POINT_SCALES);

  //   Memos
  const activeGradeScale = useMemo(
    () => gradePoints.find((data) => data.isActive),
    [gradePoints]
  );

  // Router
  const updateSearchParams = useUpdateSearchParams();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>Choose your institution's grade point scale</h4>
        <div className={classes.gps}>
          {gradePoints.map((gradePoint, i) => {
            return (
              <div key={gradePoint.point}>
                <Checkbox
                  isChecked={gradePoint.isActive}
                  onChange={(e) => {
                    activeToggler(i, gradePoints, setGradePoints);
                  }}
                />
                <label htmlFor="">{gradePoint.point}.0 </label>
              </div>
            );
          })}
        </div>

        <Button
          type="secondary"
          onClick={() => {
            updateSearchParams("step", "2", "set");
          }}
          disabled={!activeGradeScale}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SignUpGpaScale;
