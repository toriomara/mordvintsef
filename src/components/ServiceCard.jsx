import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const ServiceCard = ({ icon, title, description }) => {
  return (
    <Card className="flex flex-col w-full items-center justify-center text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <div className="h-[100%] w-fit">{icon}</div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-sm lg:text-lg">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
