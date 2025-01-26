// import { ScrollToTop } from "@/components/ScrollToTop";
// import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <main className="flex-1">
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}
