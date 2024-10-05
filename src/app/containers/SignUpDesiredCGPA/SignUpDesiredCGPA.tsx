import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import useUpdateSearchParams from "@/app/hooks/useUpdateSearchParams";
import { useSearchParams } from "next/navigation";
import classes from "./SignUpDesiredCGPA.module.css";

const SignUpDesiredCGPA = () => {
  // Hooks
  const updateSearchParams = useUpdateSearchParams();
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>What is your desired CGPA upon graduation?</h4>

        <Input label="This can be your academic goal." type="number" />

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

export default SignUpDesiredCGPA;
