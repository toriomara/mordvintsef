"use client";

import { motion } from "framer-motion";
import {
  LuScale,
  LuGavel,
  LuShieldCheck,
  LuFileText,
  LuUsers,
  LuBanknote,
  LuHouse,
  LuShoppingCart,
  LuCar,
  LuScrollText,
  LuHandshake,
  LuUserSearch,
} from "react-icons/lu";
import { TypographyH2 } from "./ui/TypographyH2";

const services = [
  {
    icon: <LuScale className="w-12 h-12 text-blue-500 dark:text-blue-400" />,
    title: "Представительство в суде",
    description:
      "Защита интересов в гражданских, уголовных и арбитражных процессах",
  },
  {
    icon: <LuGavel className="w-12 h-12 text-red-500 dark:text-red-400" />,
    title: "Уголовные дела",
    description:
      "Помощь на всех стадиях уголовного судопроизводства, защита прав подозреваемых и обвиняемых",
  },
  {
    icon: (
      <LuShieldCheck className="w-12 h-12 text-green-500 dark:text-green-400" />
    ),
    title: "Гражданские споры",
    description:
      "Разрешение споров, связанных с недвижимостью, наследством, долгами и другими вопросами",
  },
  {
    icon: (
      <LuFileText className="w-12 h-12 text-yellow-500 dark:text-yellow-400" />
    ),
    title: "Составление и анализ договоров",
    description:
      "Разработка юридически грамотных контрактов и проверка документов",
  },
  {
    icon: (
      <LuUsers className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />
    ),
    title: "Семейные споры",
    description:
      "Развод, раздел имущества и споры, касающиеся воспитания детей",
  },
  {
    icon: (
      <LuHouse className="w-12 h-12 text-purple-500 dark:text-purple-400" />
    ),
    title: "Жилищные вопросы",
    description:
      "Сопровождение сделок с недвижимостью, споры по правам собственности, выселение, аренда",
  },
  {
    icon: (
      <LuShoppingCart className="w-12 h-12 text-pink-500 dark:text-pink-400" />
    ),
    title: "Защита прав потребителей",
    description:
      "Помощь в возврате товара, получении компенсации, споры с магазинами и застройщиками",
  },
  {
    icon: <LuCar className="w-12 h-12 text-orange-500 dark:text-orange-400" />,
    title: "Автоюрист",
    description:
      "Споры со страховыми, ДТП, возмещение ущерба, лишение прав и обжалование штрафов",
  },
  {
    icon: <LuBanknote className="w-12 h-12 text-teal-500 dark:text-teal-400" />,
    title: "Долги и банкротство",
    description:
      "Защита должников, взыскание задолженности, помощь при банкротстве",
  },
  {
    icon: (
      <LuScrollText className="w-12 h-12 text-zinc-500 dark:text-zinc-400" />
    ),
    title: "Наследственные дела",
    description:
      "Оспаривание завещаний, вступление в наследство, раздел имущества",
  },
  {
    icon: (
      <LuHandshake className="w-12 h-12 text-cyan-500 dark:text-cyan-400" />
    ),
    title: "Медиация и переговоры",
    description:
      "Досудебное урегулирование споров, защита интересов в переговорах",
  },
  {
    icon: (
      <LuUserSearch className="w-12 h-12 text-lime-500 dark:text-lime-400" />
    ),
    title: "Юридическое сопровождение проверок",
    description: "Консультации и защита интересов при проверках гос. органов",
  },
];

export const ServiceSection = () => {
  return (
    <section className="container py-12 bg-zinc-100 dark:bg-zinc-900">
      <div className="container mx-auto px-6 text-center">
        <TypographyH2 position={"flex justify-center my-10"}>
          Мои услуги
        </TypographyH2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              // whileHover={{ scale: 1.05 }}
              className="transform transition-transform duration-300 hover:scale-[1.07] bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center border dark:border-zinc-700"
            >
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
