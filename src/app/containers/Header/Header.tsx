import classes from "./Header.module.css";
import lightLogo from "../../../../public/lightLogo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button/Button";

const Header = () => {
  return (
    <section className={classes.container}>
      <Image src={lightLogo} alt="GP Calc" />

      <Link href="/">Contact</Link>
      <Button>Login</Button>
      <Button type="secondary">Sign Up</Button>
    </section>
  );
};

export default Header;
