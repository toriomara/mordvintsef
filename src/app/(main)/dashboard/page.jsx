import { BreadcrumbAtPage } from "@/components/BreadcrumbAtPage";
import { TypographyH1 } from "@/components/ui/TypographyH1";

const DashboardPage = () => {
  return (
    <>
      <BreadcrumbAtPage />
      <section className="container">
        <div className="centered">
          <TypographyH1>DashboardPage</TypographyH1>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
