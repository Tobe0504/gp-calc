import classes from "./ProgressBar.module.css";

type ProgressBarTypes = {
  progress: number;
  totalSteps: number;
};

const ProgressBar = ({ progress, totalSteps }: ProgressBarTypes) => {
  return (
    <div className={classes.container}>
      <div className={classes.progressContainer}>
        <div className={classes.progressSection}>
          <div
            className={classes.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>Your Progress</p>
      </div>
      {totalSteps && <p>1 of {totalSteps}</p>}
    </div>
  );
};

export default ProgressBar;
