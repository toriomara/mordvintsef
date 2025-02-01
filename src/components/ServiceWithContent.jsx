// components/LawyerServices.jsx

import {
  FaBalanceScale,
  FaGavel,
  FaUserShield,
  FaFileContract,
  FaLandmark,
  FaRegBuilding,
  FaShieldAlt,
  FaCarCrash,
  FaHandHoldingUsd,
  FaLock,
  FaRegHandshake,
} from "react-icons/fa";

const services = [
  {
    icon: FaBalanceScale,
    title: "Представительство в суде",
    description:
      "Защита интересов в гражданских, уголовных и арбитражных процессах.",
  },
  {
    icon: FaGavel,
    title: "Уголовные дела",
    description:
      "Помощь на всех стадиях уголовного судопроизводства, защита прав подозреваемых и обвиняемых.",
  },
  {
    icon: FaUserShield,
    title: "Гражданские споры",
    description:
      "Разрешение споров, связанных с недвижимостью, наследством, долгами и другими вопросами.",
  },
  {
    icon: FaFileContract,
    title: "Составление и анализ договоров",
    description:
      "Разработка юридически грамотных контрактов и проверка документов.",
  },
  {
    icon: FaLandmark,
    title: "Корпоративное право",
    description:
      "Юридическое сопровождение бизнеса, регистрация, ликвидация, споры между учредителями.",
  },
  {
    icon: FaRegBuilding,
    title: "Жилищные вопросы",
    description:
      "Сопровождение сделок с недвижимостью, споры по правам собственности, выселение, аренда.",
  },
  {
    icon: FaShieldAlt,
    title: "Защита прав потребителей",
    description:
      "Помощь в возврате товара, получении компенсации, споры с магазинами и застройщиками.",
  },
  {
    icon: FaCarCrash,
    title: "Автоюрист",
    description:
      "Споры со страховыми, ДТП, возмещение ущерба, лишение прав и обжалование штрафов.",
  },
  {
    icon: FaHandHoldingUsd,
    title: "Долги и банкротство",
    description:
      "Защита должников, взыскание задолженности, помощь при банкротстве.",
  },
  {
    icon: FaLock,
    title: "Наследственные дела",
    description:
      "Оспаривание завещаний, вступление в наследство, раздел имущества.",
  },
  {
    icon: FaRegHandshake,
    title: "Медиация и переговоры",
    description:
      "Досудебное урегулирование споров, защита интересов в переговорах.",
  },
];

export const ServiceWithContent = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Услуги адвоката
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <service.icon className="text-gray-700 dark:text-gray-300 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
