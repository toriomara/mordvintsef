import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyH3 } from "./ui/TypographyH3";

export const AboutSection = () => {
  return (
    <section id="about" className="my-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Об адвокате</h2>
          <TypographyH3>Статус</TypographyH3>
          <p className="mb-4">
            Адвокат адвокатской коллегии адвокатов г. Волгограда №1
          </p>
          <TypographyH3>
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
          <TypographyH3>Образование</TypographyH3>
          <p className="mb-4">
            В 2004 году окончил юридический факультет Волгоградского
            государственного университета. Присвоена квалификация Юрист.
          </p>
          <TypographyH3>Профессиональный путь</TypographyH3>
          <p className="mb-4">Description2</p>
          <TypographyH3>Профессиональные достижения</TypographyH3>
          <p className="mb-4">
            В 2014 году награжден грамотой Адвокатской палаты Волгоградской
            области «За профессиональное мастерство при защите прав, свобод и
            законных интересов граждан, продолжительную и безупречную работу»
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Avatar className="w-64 h-64">
            <AvatarImage
              src="/placeholder.svg?height=256&width=256"
              alt="Lawyer"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};
