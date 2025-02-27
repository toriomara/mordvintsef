import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const certificates = [
  {
    name: "Certificate 1",
    description: "This is the first certificate.",
    image: "https://example.com/cert1.png",
  },
  {
    name: "Certificate 2",
    description: "This is the second certificate.",
    image: "https://example.com/cert2.png",
  },
  // Add more certificates here...
];

export const CertificateSection = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {certificates.map((certificate, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger
            as={(props) => <div {...props}>{certificate.name}</div>}
          />
          <HoverCardContent className="w-64">
            <div className="flex flex-col space-y-2">
              <img src={certificate.image} alt={certificate.name} />
              <h4 className="font-medium">{certificate.name}</h4>
              <p className="text-sm">{certificate.description}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};
