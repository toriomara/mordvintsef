// import { Shield, RatioIcon as Balance, Award } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// const qualityAssurances = [
//   {
//     icon: Shield,
//     title: "Оперативность",
//     description: "Выезжаю к подзащитному до заключения договора",
//   },
//   {
//     icon: Balance,
//     title: "Ethical Practice",
//     description:
//       "Our firm adheres to the highest ethical standards in legal practice and client relations.",
//   },
//   {
//     icon: Award,
//     title: "Recognition & Awards",
//     description:
//       "Our attorneys have been recognized for excellence by peer reviews and legal organizations.",
//   },
// ];

// export const BenefitSection = () => {
//   return (
//     <section className="my-10">
//       <h2 className="text-3xl font-bold text-center mb-12">Мои преимущества</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {qualityAssurances.map((item, index) => (
//           <Card key={index}>
//             <CardHeader>
//               <CardTitle className="flex items-center space-x-2">
//                 <item.icon className="h-6 w-6" />
//                 <span>{item.title}</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>{item.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };

// components/WhyHireLawyer.jsx

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

const reasons = [
  {
    icon: FaBalanceScale,
    title: "Глубокие знания законодательства",
    description:
      "Адвокат всегда в курсе актуальных законов и судебной практики, что позволяет применять их в вашу пользу.",
  },
  {
    icon: FaBrain,
    title: "Разработка стратегии защиты",
    description:
      "Грамотная юридическая тактика увеличивает шансы на успешное разрешение дела.",
  },
  {
    icon: FaClock,
    title: "Экономия времени и нервов",
    description:
      "Опытный адвокат берет на себя все сложные процессы, избавляя вас от стресса и бюрократии.",
  },
  {
    icon: FaShieldAlt,
    title: "Защита от ошибок",
    description:
      "Неправильные документы и пропущенные сроки могут стоить дорого. Профессиональный адвокат предугадывает и предотвращает ошибки.",
  },
  {
    icon: FaGavel,
    title: "Эффективное представительство в суде",
    description:
      "Выстроенная аргументация, правильные вопросы и грамотная подача доказательств — всё это влияет на исход дела.",
  },
  {
    icon: FaHandshake,
    title: "Переговоры и досудебное урегулирование",
    description:
      "Адвокат может урегулировать дело без суда, что сэкономит вам время, деньги и нервы.",
  },
  {
    icon: FaLink,
    title: "Опыт взаимодействия с судами и правоохранительными органами",
    description:
      "Понимание работы системы даёт преимущества при защите ваших интересов.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Финансовая выгода в долгосрочной перспективе",
    description:
      "Качественная юридическая помощь может уберечь вас от крупных убытков.",
  },
  {
    icon: FaUserShield,
    title: "Спокойствие и уверенность",
    description:
      "Вы будете знать, что вашим делом занимается профессионал, который защитит ваши интересы на высоком уровне.",
  },
];

export const BenefitSection = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-8">
        Преимущества профессионального адвоката или почему выбирают меня?
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-md flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <reason.icon className="text-primary text-5xl mb-4" />
            <h3 className="text-md font-semibold text-zinc-900 dark:text-white whitespace-pre-wrap">
              {reason.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mt-2">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
