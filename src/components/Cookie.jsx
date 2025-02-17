"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed w-[50%] mx-auto bottom-4 left-4 right-4 p-4 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-3 z-30">
      <p className="text-sm">
        Этот сайт использует куки для более удобного использования. Подробнее
        можно прочитать{" "}
        <Link href="/terms" className="underline text-primary ml-1">
          здесь
        </Link>
      </p>
      <div className="flex gap-2">
        <Button
          onClick={handleAccept}
          className="bg-green-500 hover:bg-green-600"
        >
          Принять
        </Button>
        <Button onClick={handleReject} className="bg-red-500 hover:bg-red-600">
          Отклонить
        </Button>
      </div>
    </div>
  );
}
