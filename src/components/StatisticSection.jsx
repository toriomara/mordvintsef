import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { number: "2000+", label: "Успешных дел" },
  { number: "17+", label: "Адвокатская практика" },
  { number: "21", label: "Юридический стаж" },
  { number: "98%", label: "Довольных клиентов" },
];

export const StatisticSection = () => {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-center mb-12">
        Немного статистики
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-primary-foreground">
            <CardHeader>
              <CardTitle className="text-3xl sm:text-4xl font-bold text-center">
                {stat.number}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
