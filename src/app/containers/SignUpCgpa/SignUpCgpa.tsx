import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import useUpdateSearchParams from "@/app/hooks/useUpdateSearchParams";
import { useSearchParams } from "next/navigation";
import React from "react";
import classes from "./SignUpCgpa.module.css";

const SignUpCgpa = () => {
  // Hooks
  const updateSearchParams = useUpdateSearchParams();
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>Please enter your current CGPA</h4>

        <Input
          label="If you're a new student, you can leave this blank."
          type="number"
        />

        <div className={classes.buttonContainer}>
          <Button
            type="secondary"
            onClick={() => {
              updateSearchParams("step", `${Number(step) + 1}`, "set");
            }}
          >
            Next
          </Button>
          <Button
            onClick={() => {
              updateSearchParams("step", `${Number(step) - 1}`, "set");
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpCgpa;
