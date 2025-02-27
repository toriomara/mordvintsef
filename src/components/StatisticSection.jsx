import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH2 } from "./ui/TypographyH2";

const stats = [
  { number: "> 1000", label: "Успешных дел" },
  { number: "17+", label: "Адвокатская практика" },
  { number: "21", label: "Юридический стаж" },
  { number: "98%", label: "Довольных клиентов" },
];

export const StatisticSection = () => {
  return (
    <section className="container-content my-10">
      <TypographyH2 position={"flex justify-center text-center mb-6"}>
        Немного статистики
      </TypographyH2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-background dark:border rounded-lg shadow-md flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <div>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-center space-y-0">
                {stat.number}
              </span>
            </div>
            <p className="text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
