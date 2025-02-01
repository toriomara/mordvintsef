import Image from "next/image";
import certificate_2023 from "../../public/images/diplomas/certificate_2023.jpg";
import certificate_2024 from "../../public/images/diplomas/certificate_2024.jpg";
import lawer_2014 from "../../public/images/diplomas/lawer_2014.jpg";
import { TypographyH2 } from "./ui/TypographyH2";

export const CertificateSection = () => {
  return (
    <section>
      <TypographyH2 position={"flex justify-center my-8"}>
        Почетные грамоты
      </TypographyH2>
      <div className="self-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-background border-border m-2">
          <Image src={certificate_2023} alt="dfdf" width="300" height="600" />
        </div>
        <Image src={certificate_2024} alt="dfdf" width="300" height="600" />
        <Image src={lawer_2014} alt="dfdf" width="300" height="600" />
        <Image src={certificate_2024} alt="dfdf" width="300" height="600" />
      </div>
    </section>
  );
};
