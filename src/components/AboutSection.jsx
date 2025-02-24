import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyH3 } from "./ui/TypographyH3";
import { TypographyH2 } from "./ui/TypographyH2";

export const AboutSection = () => {
  return (
    <section id="about" className="container-content my-10">
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
          <p className="mb-4">
            В 2014&nbsp;году награжден грамотой Адвокатской палаты Волгоградской
            области «За профессиональное мастерство при защите прав, свобод и
            законных интересов граждан, продолжительную и безупречную работу»
          </p>
          <p className="mb-4">
            В 2023&nbsp;году награжден почётной грамотой Волгоградской
            межрайонной коллегии адвокатов «За успехи в защите прав, свобод и
            законных интересов доверителей»
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Avatar className="w-64 h-64">
            <AvatarImage src="https://cdn.pixabay.com/photo/2020/08/25/11/10/chess-5516446_960_720.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};
