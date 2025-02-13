import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { Cookie } from "@/components/Cookie";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: {
    template: "%s | Адвокат Р.Ф. Мордвинцев",
    default: "Адвокат Р.Ф. Мордвинцев",
  },
  description: "Description",
  metadataBase: new URL("https://mordvintsef.vercel.app"),
};

export default function RootLayout(props) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} antialiased flex flex-col h-screen w-full`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <Cookie />
            {props.children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
