"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "./ui/TypographyH2";
import { TypographyH1 } from "./ui/TypographyH1";
import { BsTelephone } from "react-icons/bs";
import { Mail } from "lucide-react";
import advokatMordvintsev from "../../public/images/advokatMordvintsev.jpg";
import advokat from "../../public/images/advokat.png";
import advokat2 from "../../public/images/advokat2.png";
import advokat3 from "../../public/images/advokat3.png";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="md:my-10">
      <Image
        src={theme === "dark" ? advokat3 : advokat}
        alt="Background"
        layout="fill"
        objectFit="contain"
        quality={100}
        className="hidden lg:block -z-10 "
      />
      <div className="grid grid-cols grid-rows-auto md:grid-cols-2 gap-3 md:gap-0 w-[80%] mx-auto">
        <div className="grid gap-2 md:gap-6">
          <TypographyH1 position={"text-2xl xs:text-3xl my-2 leading-6"}>
            Адвокат
            <br />
            Роман&nbsp;Фёдорович Мордвинцев
          </TypographyH1>
          <TypographyH2
            position={"text-xl xs:text-2xl md:text-3xl md:text-4xl leading-6"}
          >
            Профессиональная юридическая помощь в Волгограде
          </TypographyH2>
          <p className="text-lg leading-6 sm:text-xl text-muted-foreground mb-8">
            Защита прав и законных интересов физических и юридических лиц
          </p>
          <div className="gap-4 grid xs:flex sm:flex sm:justify-start">
            <Button className="w-fit">
              <a className="flex items-center gap-3" href="tel:+79608670139">
                <BsTelephone
                  size={16}
                  className="text-white dark:text-zinc-800"
                />
                Позвонить
              </a>
            </Button>
            <a
              className="flex items-center"
              href="mailto:r.mordvintseff@yandex.ru"
            >
              <Button variant="outline">
                <Mail className="text-primary" size={16} />
                Написать
              </Button>
            </a>
          </div>
        </div>
        <div className="hidden md:flex"></div>
        <div className="md:order-last">
          <Image
            src={advokat}
            // src={advokatMordvintsev}
            alt="адвокат Мордвинцев"
            className="flex lg:hidden object-cover grayscale-[0.3] hover:grayscale-0 duration-300 ease-in-out transition-all"
            // fill
            objectFit="object-cover"
          />
        </div>
        <div className="flex md:items-center lg:order-last md:order-[3]">
          <span className="text-xl xs:text-2xl md:text-3xl lg:text-5xl font-extrabold text-black lg:text-white dark:text-zinc-300">
            Мой опыт и знания — слагаемые вашего успеха
          </span>
        </div>
      </div>
    </section>
  );
};

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { TypographyH2 } from "./ui/TypographyH2";
// import { TypographyH1 } from "./ui/TypographyH1";
// import { BsTelephone } from "react-icons/bs";
// import { Mail } from "lucide-react";
// import advokatMordvintsev from "../../public/images/advokatMordvintsev.jpg";
// import advokat from "../../public/images/advokat.png";

// export const HeroSection = () => {
//   return (
//     <section className=" my-10 bg-card dark:bg-background">
//       <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] w-[80%] mx-auto">
//         <div className="grid gap-3 pb-6">
//           <TypographyH1>
//             Адвокат
//             <br />
//             Роман&nbsp;Фёдорович Мордвинцев
//           </TypographyH1>
//           <TypographyH2 className="pb-10">
//             Профессиональная юридическая помощь в Волгограде
//           </TypographyH2>
//           <p className="text-xl text-muted-foreground mb-8">
//             Защита прав и законных интересов физических и юридических лиц
//           </p>
//           <div className="gap-4 grid xs:flex sm:flex sm:justify-start">
//             <Button className="w-fit">
//               <a className="flex items-center gap-3" href="tel:+79608670139">
//                 <BsTelephone
//                   size={16}
//                   className="text-white dark:text-zinc-800"
//                 />
//                 Позвонить
//               </a>
//             </Button>
//             <a
//               className="flex items-center"
//               href="mailto:r.mordvintseff@yandex.ru"
//             >
//               <Button variant="outline">
//                 <Mail className="text-primary" size={16} />
//                 Написать
//               </Button>
//             </a>
//           </div>
//         </div>
//         <div className="relative w-full">
//           {/* <h1>kdsjfh</h1> */}
//           <Image
//             src={advokat}
//             // src={advokatMordvintsev}
//             alt="адвокат Мордвинцев"
//             className="object-cover grayscale-[0.3] hover:grayscale-0 duration-300 ease-in-out transition-all"
//             // height="100%"
//             fill
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
