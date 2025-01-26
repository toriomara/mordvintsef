import { CheckCircle } from "lucide-react";

const benefits = [
  "Experienced attorneys dedicated to your case",
  "Personalized legal strategies tailored to your needs",
  "Clear communication throughout your legal process",
  "Proven track record of successful outcomes",
  "Flexible scheduling and responsive client service",
  "Transparent pricing and fee structures",
];

export const ChooseSection = () => {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают меня</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
            <p className="text-lg">{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
