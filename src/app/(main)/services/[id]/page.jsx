import NotFound from "@/app/not-found";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import { notFound } from "next/navigation";

const services = {
  criminal: {
    title: "Уголовный адвокат",
    href: "/services/criminal",
    description:
      "Правовая помощь по уголовным делам любой сложности и на всех стадиях уголовного судопроизводства",
  },
  arbitration: {
    title: "Арбитражный адвокат",
    href: "/services/arbitration",
    description:
      "Разрешение экономических споров и дел, связанных с осуществлением предпринимательской или другой экономической деятельности",
  },
  family: {
    title: "Семейный адвокат",
    href: "/services/family",
    description: "Юридическая помощь по семейным спорам и вопросам",
  },
  finance: {
    title: "Адвокат по банкротству",
    href: "/services/finance",
    description: "Сопровождение процедуры банкротства",
  },
  medicine: {
    title: "Медицинский адвокат",
    href: "/services/medicine",
    description:
      "Защита прав и законных интересов клиентов, связанных с оказанием медицинской помощи",
  },
  personal: {
    title: "Персональный адвокат",
    href: "/services/personal",
    description:
      "Адвокат, действующий в интересах Клиента в широком спектре услуг, обладающий высочайшей квалификацией и обширным опытом",
  },
};

export default function ServicePage({ params }) {
  const service = services[params.id];

  if (!service) {
    <NotFound />;
  }

  return (
    <div className="w-[80%] mx-auto">
      <TypographyH1>{service.title}</TypographyH1>
      <p className="mb-4">{service.description}</p>
      <a href="/services" className="text-blue-600 hover:underline">
        Back to Services
      </a>
    </div>
  );
}
