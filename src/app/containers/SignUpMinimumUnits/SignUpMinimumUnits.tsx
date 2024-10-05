import classes from "./SignUpMinimumUnits.module.css";
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import useUpdateSearchParams from "@/app/hooks/useUpdateSearchParams";
import { useSearchParams } from "next/navigation";

const SignUpMimimumUnits = () => {
  // Hooks
  const updateSearchParams = useUpdateSearchParams();
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>Enter the minimum number of units required for you to graduate</h4>

        <Input label="This is the last step." type="number" />

        <div className={classes.buttonContainer}>
          <Button
            type="secondary"
            onClick={() => {
              updateSearchParams("step", "review", "set");
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

export default SignUpMimimumUnits;
