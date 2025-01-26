"use client";

import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { Logo } from "./Logo";
import { navLinks } from "@/constants";
import { useActivePath } from "@/hooks/useActivePath";
import { MobileMenu } from "./MobileMenu";
import { PhoneBlock } from "./PhoneBlock";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import theme from "tailwindcss/defaultTheme";
import { dark, light } from "@clerk/themes";
import { FiUser } from "react-icons/fi";

export const Header = () => {
  const checkActivePath = useActivePath();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky inset-x-0 top-0 backdrop-blur scroll-border-b z-50 duration-200 ${
        isScrolled ? "border-b" : ""
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between gap-10 min-h-16">
          <Logo />
          <div className="menu hidden xl:flex md:w-auto" id="navbar">
            <div className="md:flex-row p-4 md:p-0 lg:space-x-10 xl:space-x-10 items-center text-sm font-light">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`${
                    checkActivePath(link.path)
                      ? "text-primary dark:text-primary"
                      : "text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="inline-flex gap-4">
            <div className="hidden lg:flex">
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
            </div>
            <div className="hidden md:flex">
              <PhoneBlock />
            </div>
            <div className="hidden md:flex">
              <Link href="/search">
                <Button
                  className="px-4 bg-background border"
                  variant="secondary"
                  // onClick={() => setOpen(true)}
                >
                  <AiOutlineSearch className="fill-gray-500 mr-2 h-[20px] w-[20px]" />
                  <span className="text-gray-400">Ctrl K</span>
                </Button>
              </Link>
            </div>
            <div className="hidden md:flex">
              <ModeToggle />
            </div>
            <div className="flex mx-4">
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
