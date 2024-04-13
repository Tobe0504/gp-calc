import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import Layout from "@/app/components/Layout/Layout";
import Link from "next/link";
import classes from "../SignUp/SignUp.module.css";

const SignIn = () => {
  return (
    <Layout useSecondLogo>
      <section className={classes.container}>
        <div className={classes.innerContainer}>
          <h4>Welcome Back.</h4>
          <form>
            <Input placeholder="Email Address" label="Email Address" />
            <Input type="password" placeholder="****" label="Password" />
            <Button type="secondary">Continue</Button>
          </form>

          <p className={classes.privacyPolicy}>
            By joining, you agree to our <Link href="/">Terms of Service</Link>{" "}
            and <Link href="/">Privacy Policy</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default SignIn;
