// "use client";

// import Link from "next/link";
// import { ModeToggle } from "./ModeToggle";
// import { Logo } from "./Logo";
// import { navLinks } from "@/constants";
// import { useActivePath } from "@/hooks/useActivePath";
// import { MobileMenu } from "./MobileMenu";
// import { PhoneBlock } from "./PhoneBlock";
// import { Button } from "./ui/button";
// import { forwardRef, useEffect, useState } from "react";
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import theme from "tailwindcss/defaultTheme";
// import { dark, light } from "@clerk/themes";
// import { FiUser } from "react-icons/fi";
// import SearchModalPage from "@/app/(main)/@modal/(.)search/page";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "./ui/navigation-menu";
// import { TypographyH4 } from "./ui/TypographyH4";
// import { cn } from "@/lib/utils";

// const services = [
//   {
//     title: "Уголовный адвокат",
//     href: "/services/criminal",
//     description:
//       "Правовая помощь по уголовным делам любой сложности и на всех стадиях уголовного судопроизводства",
//   },
//   {
//     title: "Арбитражный адвокат",
//     href: "/services/arbitration",
//     description:
//       "Разрешение экономических споров и дел, связанных с осуществлением предпринимательской или другой экономической деятельности",
//   },
//   {
//     title: "Семейный адвокат",
//     href: "/services/family",
//     description: "Юридическая помощь по семейным спорам и вопросам",
//   },
//   {
//     title: "Адвокат по банкротству",
//     href: "/services/finance",
//     description: "Сопровождение процедуры банкротства",
//   },
//   {
//     title: "Медицинский адвокат",
//     href: "/services/medicine",
//     description:
//       "Защита прав и законных интересов клиентов, связанных с оказанием медицинской помощи",
//   },
//   {
//     title: "Персональный адвокат",
//     href: "/services/personal",
//     description:
//       "Адвокат, действующий в интересах Клиента в широком спектре услуг, обладающий высочайшей квалификацией и обширным опытом",
//   },
// ];

// export const Header = () => {
//   const checkActivePath = useActivePath();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`sticky inset-x-0 top-0 backdrop-blur scroll-border-b z-50 duration-300 ${
//         isScrolled ? "border-b" : ""
//       }`}
//     >
//       <div className="container">
//         <nav className="flex items-center justify-between gap-10 min-h-16">
//           <Logo />
//           <div className="menu hidden xl:flex md:w-auto" id="navbar">
//             <div className="md:flex-row p-4 md:p-0 lg:space-x-10 xl:space-x-10 items-center text-sm font-light">
//               <NavigationMenu>
//                 <NavigationMenuList className="flex space-x-6">
//                   {navLinks.map((link, index) => (
//                     <NavigationMenuItem>
//                       <Link
//                         key={index}
//                         href={link.path}
//                         className={`${
//                           checkActivePath(link.path)
//                             ? "text-primary dark:text-primary"
//                             : "text-zinc-900 dark:text-zinc-300 hover:text-primary dark:hover:text-primary"
//                         }`}
//                       >
//                         {link.title}
//                       </Link>
//                     </NavigationMenuItem>
//                   ))}
//                   <NavigationMenuItem>
//                     <NavigationMenuTrigger className='hover:bg-transparent'>
//                       <Link href="/services">Услуги</Link>
//                     </NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                       <ul className="grid w-[400px] gap-3 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                         {services.map((service) => (
//                           <Link
//                             className="border p-3 rounded-md"
//                             key={service.title}
//                             title={service.title}
//                             href={service.href}
//                           >
//                             <TypographyH4 className="flex">
//                               {service.title}
//                             </TypographyH4>
//                             <span className="text-xs">
//                               {service.description}
//                             </span>
//                           </Link>
//                         ))}
//                       </ul>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>
//           </div>
//           <div className="inline-flex gap-4">
//             <div className="hidden lg:flex">
//               <SignedOut>
//                 <Link href="sign-in">
//                   <Button>
//                     <FiUser />
//                     SignIn
//                   </Button>
//                 </Link>
//               </SignedOut>
//               <SignedIn>
//                 <UserButton
//                   appearance={{
//                     baseTheme: theme === "light" ? light : dark,
//                   }}
//                 />
//               </SignedIn>
//             </div>
//             <div className="hidden md:flex">
//               <PhoneBlock />
//             </div>
//             <div className="hidden md:flex gap-2">
//               <SearchModalPage />
//             </div>
//             <div className="hidden md:flex">
//               <ModeToggle />
//             </div>
//             <div className="flex xl:hidden">
//               <MobileMenu links={navLinks} />
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// const ListItem = forwardRef(function ListItem(
//   { className, title, children, ...props },
//   ref
// ) {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

// export default Header;

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
