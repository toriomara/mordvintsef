// https://github.com/toriomara/nextjs-portfolio-pageview-counter/blob/main/app/contact/page.tsx

"use client";

import { Card } from "@/components/Card";
import { DrawerMap } from "@/components/DrawerMap";
import { EmailSection } from "@/components/EmailSection";
import GoogleMap from "@/components/GoogleMap";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import { Mail } from "lucide-react";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";

const socials = [
  {
    icon: <FaMapLocationDot size={30} />,
    // href: "400005, г. Волгоград, ул. Коммунистическая, д.21, оф. 46",
    href: "#",
    label: "Адрес",
    handle: "400005, г.Волгоград, ул. Коммунистическая, д.21, офис 46",
  },
  {
    icon: <FaMobileScreen size={30} />,
    href: "tel:+79608670139",
    label: "Телефон",
    handle: "+7 960 867 01 39",
  },
  {
    icon: <Mail size={30} />,
    href: "mailto:r.mordvintseff@yandex.ru",
    label: "Email",
    handle: "r.mordvintseff@yandex.ru",
  },
];

export const ContactsPage = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <TypographyH1>Контакты</TypographyH1>
        <div className="">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <Card key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="relative p-6 xs:p-8 md:p-10 xl:py-20 flex flex-col items-center gap-6 md:gap-12 xl:gap-16 duration-700"
                >
                  <span
                    className="hidden dark:flex absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 text-sm duration-1000 border rounded-full text-zinc-800 dark:text-zinc-200 group-hover:text-primary group-hover:bg-white group-hover:dark:bg-zinc-900 border-zinc-500 bg-white dark:bg-zinc-900 group-hover:dark:border-zinc-200">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-center xs:text-xl md:text-[15px] lg:text-xl xl:text-2xl font-medium duration-300 text-zinc-500 dark:text-zinc-300 group-hover:text-primary font-display">
                      {s.handle}
                    </span>
                    {/* <span className="mt-4 text-xl text-center duration-1000 text-muted-foreground group-hover:text-zinc-600 group-hover:dark:text-zinc-200">
                    {s.label}
                  </span> */}
                  </div>
                </Link>
              </Card>
            ))}
            {/* YET ANOTHER CARD */}
            {/* <Card>
              <div className="relative p-6 xs:p-8 md:p-10 xl:py-20 flex flex-col items-center gap-6 md:gap-12 xl:gap-16 duration-700">
                <span
                  className="hidden dark:flex absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 text-sm duration-1000 border rounded-full text-zinc-800 dark:text-zinc-200 group-hover:text-primary group-hover:bg-white group-hover:dark:bg-zinc-900 border-zinc-500 bg-white dark:bg-zinc-900 group-hover:dark:border-zinc-200">
                  <FaMapLocationDot size={30} />
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-center xs:text-xl md:text-[15px] lg:text-xl xl:text-2xl font-medium duration-300 text-zinc-500 dark:text-zinc-300 group-hover:text-primary font-display">
                    400005, г. Волгоград, ул. Коммунистическая, д.21, офис 46
                  </span>
                </div>
              </div>
            </Card> */}
            {/* <DrawerMap /> */}
          </div>
        </div>
      </div>
      <div className="h-96 my-16">
        <GoogleMap />
      </div>
      <EmailSection />
    </div>
  );
};

export default ContactsPage;
