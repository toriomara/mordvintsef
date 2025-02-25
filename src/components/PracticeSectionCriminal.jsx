import React from "react";
import { TypographyH2 } from "./ui/TypographyH2";
import { Sidebar } from "./Sidebar";

export const PracticeSectionCriminal = () => {
  return (
    <div className="container-content grid lg:grid-cols-[4fr,1fr] gap-8 my-10">
      <div>
        <TypographyH2>Моя практика по уголовным делам</TypographyH2>
        <p className="py-4">
          1. Защищая в Краснооктябрьском районном суде г. Волгограда гражданина Л.
          адвокат Мордвинцев Р.Ф. добился вынесения оправдательного приговора от
          29.07.2019 г. по ч.2 статьи 210 УК РФ «Участие в преступном
          сообществе» на основании п.2 ч.1 ст.24, п.3 ч.2 ст.302 УПК РФ в связи
          с отсутствием в его действиях состава преступления, признав за Л.
          право на реабилитацию. Волгоградский областной суд ставил данный
          приговор без изменения.
        </p>
      </div>
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
    </div>
  );
};

// add link to law
