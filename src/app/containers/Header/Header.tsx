import classes from "./Header.module.css";
import lightLogo from "../../../../public/lightLogo.svg";
import logoWithoutName from "../../../../public/logoWithoutName.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";

type HeaderProps = {
  useSecondLogo?: boolean;
};

const Header = ({ useSecondLogo }: HeaderProps) => {
  // Router
  const router = useRouter();
  return (
    <section className={classes.container}>
      {useSecondLogo ? (
        <Image
          src={logoWithoutName}
          alt="GP Calc"
          onClick={() => {
            router.push("/");
          }}
        />
      ) : (
        <Image
          src={lightLogo}
          alt="GP Calc"
          onClick={() => {
            router.push("/");
          }}
        />
      )}

      <Link href="/">Contact</Link>
      <Button
        onClick={() => {
          router.push("/sign-in");
        }}
      >
        Login
      </Button>
      <Button
        type="secondary"
        onClick={() => {
          router.push("/sign-up");
        }}
      >
        Sign Up
      </Button>
    </section>
  );
};

export default Header;
