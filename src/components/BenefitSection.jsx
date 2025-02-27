import {
  FaBalanceScale,
  FaBrain,
  FaClock,
  FaShieldAlt,
  FaGavel,
  FaHandshake,
  FaLink,
  FaMoneyBillWave,
  FaUserShield,
} from "react-icons/fa";
import { TypographyH2 } from "./ui/TypographyH2";

const reasons = [
  {
    icon: FaBalanceScale,
    title: "Глубокие знания законодательства",
    description:
      "Всегда в курсе актуальных законов и судебной практики, что позволяет применять их в вашу пользу",
  },
  {
    icon: FaBrain,
    title: "Разработка стратегии защиты",
    description:
      "Грамотная юридическая тактика увеличивает шансы на успешное разрешение дела",
  },
  {
    icon: FaClock,
    title: "Экономия времени и нервов",
    description:
      "Беру на себя все сложные процессы, избавляя вас от стресса и бюрократии",
  },
  {
    icon: FaShieldAlt,
    title: "Защита от ошибок",
    description:
      "Неправильные документы и пропущенные сроки могут стоить дорого. Профессиональный адвокат не допускает таких ошибок",
  },
  {
    icon: FaGavel,
    title: "Эффективное представительство в суде",
    description:
      "Выстроенная аргументация, правильные вопросы и грамотная подача доказательств — всё это влияет на исход дела",
  },
  {
    icon: FaHandshake,
    title: "Переговоры и досудебное урегулирование",
    description:
      "Возможность дело без суда, что сэкономит вам время, деньги и нервы",
  },
  {
    icon: FaLink,
    title: "Опыт взаимодействия с судами и правоохранительными органами",
    description:
      "Понимание работы системы даёт преимущества при защите ваших интересов",
  },
  {
    icon: FaMoneyBillWave,
    title: "Финансовая выгода в долгосрочной перспективе",
    description:
      "Качественная юридическая помощь сможет уберечь вас от крупных убытков",
  },
  {
    icon: FaUserShield,
    title: "Спокойствие и уверенность",
    description:
      "Вы будете знать, что вашим делом занимается профессионал, который защитит ваши интересы на высоком уровне",
  },
];

export const BenefitSection = () => {
  return (
    <div className="container-content py-12">
      <TypographyH2 position={"flex justify-center text-center mb-6"}>
        Преимущества профессионального адвоката или почему выбирают меня?
      </TypographyH2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-background dark:border rounded-lg shadow-md flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <reason.icon className="text-primary text-5xl mb-4" />
            <h3 className="text-md font-semibold text-zinc-900 dark:text-white whitespace-pre-wrap">
              {reason.title}
            </h3>
            <p className="hidden md:flex text-zinc-600 dark:text-zinc-300 mt-2">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
