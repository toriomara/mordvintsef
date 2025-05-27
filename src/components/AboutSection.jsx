"use client";

import { TypographyH3 } from "./ui/TypographyH3";
import { TypographyH2 } from "./ui/TypographyH2";
import { CertificateList } from "./CertificateList";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="container my-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <TypographyH2 position={"mb-4"}>Об адвокате</TypographyH2>
          <TypographyH3 position={"text-muted-foreground"}>Статус</TypographyH3>
          <p className="mb-4">
            Адвокат, филиал №&nbsp;10 Волгоградской межрайонной коллегии
            адвокатов
          </p>
          <TypographyH3 position={"text-muted-foreground"}>
            Специализация и основное направление деятельности
          </TypographyH3>
          <p className="mb-4">
            Защита по уголовным делам любой сложности и категории (преступления
            против жизни и здоровья, свободы, чести и достоинства личности,
            половой неприкосновенности, незаконного оборота наркотических
            средств, конституционных прав и свобод человека и гражданина, в
            отношении несовершеннолетних, против собственности, в сфере
            экономической деятельности, против безопасности движения и
            эксплуатации транспортна, против государственной власти, интересов
            государственной службы и службы в органах местного самоуправления,
            против правосудия, против военной службы), участие в качестве
            защитника в ходе доследственной проверки, на стадии предварительного
            расследования, в суде первой инстанции.
          </p>
          <TypographyH3 position={"text-muted-foreground"}>
            Образование
          </TypographyH3>
          <p className="mb-4">
            Высшее юридическое (2004). В 2013&nbsp;году окончил магистратуру
            юридического факультета Волгоградского государственного университета
          </p>
          <TypographyH3 position={"text-muted-foreground"}>
            Профессиональный путь
          </TypographyH3>
          <p className="mb-4">
            С 2008&nbsp;года осуществляю профессиональную деятельность в Филиале
            №&nbsp;10 Волгоградской межрайонной коллегии адвокатов
          </p>
          <TypographyH3 position={"text-muted-foreground"}>
            Профессиональные достижения
          </TypographyH3>
          <div className="mb-4">
            В 2014&nbsp;году награждён
            <HoverCard>
              <HoverCardTrigger className="text-primary">
                {" "}
                грамотой Адвокатской палаты Волгоградской области{" "}
              </HoverCardTrigger>
              <HoverCardContent className="w-[290px] md:w-[400px]">
                <Image
                  src="/images/diplomas/lawer_2014.jpg"
                  alt="Грамота"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </HoverCardContent>
              «За профессиональное мастерство при защите прав, свобод и законных
              интересов граждан, продолжительную и безупречную работу»
            </HoverCard>
          </div>
          <div className="mb-4">
            В 2023&nbsp;году награждён
            <HoverCard>
              <HoverCardTrigger className="text-primary">
                {" "}
                почётной грамотой Волгоградской межрайонной коллегии адвокатов{" "}
              </HoverCardTrigger>
              <HoverCardContent className="w-[290px] md:w-[400px]">
                <Image
                  src="/images/diplomas/certificate_2023.jpg"
                  alt="Грамота"
                  width={700}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </HoverCardContent>
              «За успехи в защите прав, свобод и законных интересов доверителей»
            </HoverCard>
          </div>
        </div>
        <div className="md:w-1/2 justify-center">
          <CertificateList />
        </div>
      </div>
    </section>
  );
};
