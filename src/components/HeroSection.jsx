import { Button } from "@/components/ui/button";
import { TypographyLarge } from "./ui/TypographyLarge";
import { TypographyH2 } from "./ui/TypographyH2";
import { TypographyH1 } from "./ui/TypographyH1";
import { BsTelephone } from "react-icons/bs";
import { Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="my-10">
      <div className="grid gap-3 max-w-[60%]">
        <TypographyH1>
          Адвокат
          <br />
          Роман&nbsp;Фёдорович Мордвинцев
        </TypographyH1>
        <TypographyH2 className="pb-10">
          Профессиональная юридическая помощь в Волгограде
        </TypographyH2>
        <p className="text-xl text-muted-foreground mb-8">
          Защита прав и законных интересов физических и юридических лиц
        </p>
        <div className="gap-4 grid xs:flex sm:flex sm:justify-start">
          <Button className='w-fit' variant="secondary">
            <a className="flex items-center gap-3" href="tel:+79608670139">
              <BsTelephone size={16} className="text-primary" />
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
    </section>
  );
};
