"use client";

import { Button } from "@/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <main className="grid flex-auto min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-8xl text-secondary-400">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-tertiary-500">
            Страница не найдена
          </h1>
          <p className="mt-6 text-lg leading-7">
            Извините, но такой страницы ещё нет 🙂
          </p>
          <div className="my-10 flex items-center justify-center gap-x-6">
            <Button onClick={() => router.back()}>
              <BsArrowLeft className="h-5 w-5 mr-2" />
              Назад
            </Button>
            <Button variant="outline">
              <Link
                href="/"
                className="text-primary text-sm font-semibold hover:bg-secondary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                На главную
              </Link>
            </Button>
          </div>
          <Button variant="outline">
            <Link href="/" className="text-sm font-semibold">
              Связаться с поддержкой
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
