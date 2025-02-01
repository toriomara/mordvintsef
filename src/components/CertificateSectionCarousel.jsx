import certificate_2023 from "../../public/images/diplomas/certificate_2023.jpg";
import certificate_2024 from "../../public/images/diplomas/certificate_2024.jpg";
import lawer_2014 from "../../public/images/diplomas/lawer_2014.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const diplomas = [
  {
    id: 1,
    title: "Почётная грамота за успехи в защите прав, 2023",
    image: certificate_2023,
  },
  {
    id: 2,
    title: "Сертификат за защиту прав потерпевших, 2024",
    image: certificate_2024,
  },
  {
    id: 3,
    title:
      "Почётная грамота за профессиональное мастерство при защите прав, 2014",
    image: lawer_2014,
  },
  {
    id: 4,
    title: "",
    image: certificate_2023,
  },
  {
    id: 5,
    title: "",
    image: certificate_2024,
  },
  {
    id: 6,
    title: "",
    image: lawer_2014,
  },
];

export const CertificateSectionCarousel = () => {
  return (
    <section className="my-14">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%] mx-auto"
      >
        <CarouselContent>
          {diplomas.map((name, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={name.image}
                      alt={name.title}
                      width="230"
                      // height={100}
                    ></Image>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
