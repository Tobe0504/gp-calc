import Button from "@/app/components/Button/Button";
import useUpdateSearchParams from "@/app/hooks/useUpdateSearchParams";
import { useSearchParams } from "next/navigation";
import classes from "./GetStarted.module.css";

const GetStarted = () => {
  // Router
  const updateSearchParams = useUpdateSearchParams();
  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>Create an Account to get Access to All Features.</h4>
        <p>
          Before we get started, we'd like to learn a bit more about your
          academic goals and current standing.
        </p>

        <Button
          type="secondary"
          onClick={() => {
            updateSearchParams("step", "1", "set");
          }}
        >
          Let's go
        </Button>
      </div>
    </section>
  );
};

export default GetStarted;
