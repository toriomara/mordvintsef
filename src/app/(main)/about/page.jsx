import { MissionSection } from "@/components/MissionSection";
import { Testimonials } from "@/components/Testimonials";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import React from "react";

export const metadata = {
  title: "Об адвокате",
  description: "Об адвокате Романе Фёдоровиче Мордвинцеве",
};

function AboutPage() {
  return (
    <div className="w-[80%] mx-auto">
      <TypographyH1>Об адвокате Р.Ф.&nbsp;Мордвинцеве</TypographyH1>
      <MissionSection />
      <Testimonials />
    </div>
  );
}

export default AboutPage;

{
  /* 2.3. К обязательной информации, подлежащей размещению на персональном сайте адвоката, относятся: фамилия, имя, отчество адвоката; наименование адвокатского образования, в котором он состоит; реестровый номер адвоката; наименование адвокатской палаты, членом которой является адвокат; адрес, телефон и другая контактная информация. */
}
