"use client";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { TypographyH3 } from "./ui/TypographyH3";
import Image from "next/image";

const certificates = [
  {
    name: "Прямой и перекрёстный допрос в суде: различия, техники проведения, цели и способы их достижения",
    description: "11 февраля 2022 г.",
    image: "/images/certificates/certificate_6.webp",
  },
  {
    name: "Мошенничество, прикрытое договором, и внедоговорное обязательство",
    description: "16 декабря 2022 г.",
    image: "/images/certificates/certificate_5.webp",
  },
  {
    name: "Защита прав потерпевших в уголовном судопроизводстве",
    description: "24 января 2024 г.",
    image: "/images/certificates/certificate_4.webp",
  },
  {
    name: "Проблемные вопросы определения степени тяжести вреда, причинённого здоровью человека",
    description: "28 февраля 2024 г.",
    image: "/images/certificates/certificate_3.webp",
  },
  {
    name: "Риски трансформации совместной собственности супругов в долевую и как их минимизировать",
    description: "16 апреля 2024 г.",
    image: "/images/certificates/certificate_2.webp",
  },
  {
    name: "Уголовно-правовая характеристика фальсификации доказательства и результатов оперативно-разыскной деятельности",
    description: "13 ноября 2024 г.",
    image: "/images/certificates/certificate.webp",
  },
];

export const CertificateList = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <TypographyH3>
        Непрерывно поддерживает свои знания в актуальном состоянии
      </TypographyH3>
      {certificates.map((item, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger>
            {index + 1}. {item.name}
          </HoverCardTrigger>
          {/* as={(props) => <div {...props}></div>} */}

          <HoverCardContent className="w-74">
            <div className="flex flex-col space-y-2">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={500}
                priority
              />
              {/* <h4 className="font-medium">{certificate.name}</h4> */}
              <p className="text-sm">{item.description}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};
