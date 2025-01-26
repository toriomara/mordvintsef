import { Shield, RatioIcon as Balance, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const qualityAssurances = [
  {
    icon: Shield,
    title: "Оперативность",
    description: "Выезжаю к подзащитному до заключения договора",
  },
  {
    icon: Balance,
    title: "Ethical Practice",
    description:
      "Our firm adheres to the highest ethical standards in legal practice and client relations.",
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    description:
      "Our attorneys have been recognized for excellence by peer reviews and legal organizations.",
  },
];

export const BenefitSection = () => {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-center mb-12">Мои преимущества</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {qualityAssurances.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <item.icon className="h-6 w-6" />
                <span>{item.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
