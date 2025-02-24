import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TypographyH2 } from "./ui/TypographyH2";
import { TypographyLead } from "./ui/TypographyLead";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Sidebar } from "./Sidebar";

const services = [
  {
    title: "Family Law",
    description: "Divorce, child custody, and adoption services.",
  },
  {
    title: "Criminal Defense",
    description: "Experienced representation for all criminal charges.",
  },
  {
    title: "Personal Injury",
    description: "Helping you recover compensation for injuries.",
  },
  {
    title: "Estate Planning",
    description: "Wills, trusts, and estate administration.",
  },
];

export const HarantSection = () => {
  return (
    <section
      id="services"
      className="grid grid-cols lg:grid-cols-[2fr,4fr] gap-8 m-10"
    >
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
      <div>
        <TypographyH2 position={"flex justify-center my-10"}>
          Профиль в harant.ru
        </TypographyH2>
        <div className="grid gap-6">
          <TypographyLead>
            Юридическая практика требует не только глубоких знаний закона, но и
            умения применять их в реальных, зачастую непростых жизненных
            ситуациях. На протяжении многих лет я оказываю квалифицированную
            правовую помощь, сочетая строгий аналитический подход с вниманием к
            деталям и интересам доверителей.
          </TypographyLead>
          <TypographyLead>
            Мой опыт охватывает широкий спектр юридических вопросов — от сложных
            судебных разбирательств до стратегического правового сопровождения
            бизнеса. Каждый случай уникален, и моя задача — найти оптимальное
            решение, обеспечив надежную правовую защиту.
          </TypographyLead>
          <TypographyLead>
            В своей работе я придерживаюсь принципов конфиденциальности,
            ответственности и безупречного профессионализма. Если вам необходим
            адвокат, который действует четко, грамотно и в интересах клиента,
            приглашаю ознакомиться с дополнительной информацией на
            специализированном юридическом ресурсе:{" "}
            <Link
              className="link group"
              href="https://harant.ru/lawyers/volgograd/mordvinczev-roman-fedorovich/"
              target="_blank"
            >
              harant.ru
              <HiOutlineExternalLink
                size={14}
                className="inline-flex text-zinc-400 group-hover:text-primary ml-1"
              />
            </Link>
          </TypographyLead>
        </div>
      </div>
    </section>
  );
};
