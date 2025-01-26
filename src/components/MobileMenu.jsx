"use client";

import * as React from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PhoneBlock } from "./PhoneBlock";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { ModeToggle } from "./modeToggle";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SocialIcons } from "./SocialIcons";

export function MobileMenu({ links }) {
  const isDesktop = useMediaQuery("(max-width: 1280px)");

  return (
    isDesktop && (
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icons">
            <FaBars size={20} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="grid w-full xs:w-4/5 sm:w-3/5 mx-auto xs:px-8 bottom-0 top-0 right-0 border-l">
          <DrawerHeader className="flex justify-between">
            <ModeToggle />
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <IoClose size={20} />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="grid gap-3 content-start justify-center p-4">
            <DrawerTitle className="text-center">Поиск</DrawerTitle>
            <DrawerDescription></DrawerDescription>
            <DrawerClose asChild>
              <Link href="/search">
                <Button
                  className="px-4 bg-background border"
                  variant="secondary"
                >
                  <AiOutlineSearch className="fill-gray-500 mr-2 h-[20px] w-[20px]" />
                  <span className="text-gray-400">Ctrl + G</span>
                </Button>
              </Link>
            </DrawerClose>
          </div>
          <div className="p-4">
            <div className="mt-3 h-[120px]">
              <nav className="flex flex-col items-center">
                {links.map((link, index) => (
                  <div key={index} className="py-2">
                    <NavLink link={link} />
                  </div>
                ))}
              </nav>
            </div>
          </div>
          <DrawerFooter className="flex-row justify-between">
            <SocialIcons layout={"flex"} />
            <PhoneBlock />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  );
}
