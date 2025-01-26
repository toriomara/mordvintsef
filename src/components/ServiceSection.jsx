import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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

export const ServiceSection = () => {
  return (
    <section id="services" className="my-10">
      <h2 className="text-3xl font-bold text-center mb-12">Мои услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
