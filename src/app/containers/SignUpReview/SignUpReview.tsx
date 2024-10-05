import classes from "./SignUpReview.module.css";
import Button from "@/app/components/Button/Button";
import useUpdateSearchParams from "@/app/hooks/useUpdateSearchParams";

const SignUpReview = () => {
  // Hooks
  const updateSearchParams = useUpdateSearchParams();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>All done!</h4>
        <p>
          Please review the information provided below and confirm it’s accuracy
          before proceeding.
        </p>

        <div className={classes.infoSection}>
          <div className={classes.info}>
            <p>GPA Scale</p>
            <p>5.0</p>
          </div>

          <div className={classes.info}>
            <p>Current GPA</p>
            <p>NIL</p>
          </div>

          <div className={classes.info}>
            <p>Desired GPA</p>
            <p>5.0</p>
          </div>

          <div className={classes.info}>
            <p>Semesters Left</p>
            <p>6</p>
          </div>

          <div className={classes.info}>
            <p>Min. Units Required</p>
            <p>32</p>
          </div>
        </div>

        <div className={classes.buttonContainer}>
          <Button type="secondary" onClick={() => {}}>
            Next
          </Button>
          <Button
            onClick={() => {
              updateSearchParams("step", `5`, "set");
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpReview;
