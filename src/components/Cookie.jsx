"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Cookie = () => {
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setShowCookies(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookies(false);
  };

  return (
    <div>
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-primary dark:bg-primary-foreground text-white p-4 flex justify-between items-center z-20">
          <p className="text-sm">
            Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем{' '}
            <Link className='link' href="#">cookies</Link>
          </p>
          <Button
            className="ml-6 bg-primary dark:bg-transparent dark:border-zinc-300"
            variant="outline"
            onClick={handleAcceptCookies}
          >
            Принять
          </Button>
        </div>
      )}
    </div>
  );
};
