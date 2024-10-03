import Button from "@/app/components/Button/Button";
import Layout from "@/app/components/Layout/Layout";
import classes from "./page.module.css";

const GetStarted = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h4>Create an Account to get Access to All Features.</h4>
          <p>
            Before we get started, we'd like to learn a bit more about your
            academic goals and current standing.
          </p>

          <Button type="secondary">Let's go</Button>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
