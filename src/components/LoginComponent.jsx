import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import theme from "tailwindcss/defaultTheme";
import { dark, light } from "@clerk/themes";
import { FiUser } from "react-icons/fi";

export const LoginComponent = () => {
  return (
    <>
      <SignedOut>
        <Link href="sign-in">
          <Button>
            <FiUser />
            SignIn
          </Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            baseTheme: theme === "light" ? light : dark,
          }}
        />
      </SignedIn>
    </>
  );
};
