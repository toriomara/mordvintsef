import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-full inert">
      <Header />
      <main className="flex-1">
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}
