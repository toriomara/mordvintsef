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
    <div className="fixed w-2/3 md:w-1/2 mx-auto bottom-4 left-4 right-4 p-4 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-lg flex flex-col lg:flex-row items-center justify-between gap-3 z-30 shadow-lg">
      <p className="text-sm">
        Мы используем куки, они делают использование сайта более удобным.
        Подробнее можно прочитать{" "}
        <Link href="/terms" className="underline text-primary ml-1">
          здесь
        </Link>
      </p>
      <div className="flex gap-3">
        <Button className="bg-primary shadow-lg" onClick={handleAccept}>
          Принять
        </Button>
        <Button
          className="shadow-lg"
          onClick={handleReject}
          variant="secondary"
        >
          Отклонить
        </Button>
      </div>
    </div>
  );
};
