"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Logo } from "./Logo";
import { navLinks } from "@/constants";
import { useActivePath } from "@/hooks/useActivePath";
import { MobileMenu } from "./MobileMenu";
import { PhoneBlock } from "./PhoneBlock";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import theme from "tailwindcss/defaultTheme";
import { dark, light } from "@clerk/themes";
import { FiUser } from "react-icons/fi";
import SearchModalPage from "@/app/(main)/@modal/(.)search/page";

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
      className={`sticky inset-x-0 top-0 backdrop-blur scroll-border-b z-50 duration-300 ${
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
                      : "text-zinc-900 dark:text-zinc-300 hover:text-primary dark:hover:text-primary"
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
            <div className="hidden md:flex gap-2">
              <SearchModalPage />
            </div>
            <div className="hidden md:flex">
              <ModeToggle />
            </div>
            <div className="flex xl:hidden">
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
