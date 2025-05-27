"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const translations = {
  "sign-up": "Регистрация",
  "sign-in": "Вход",
  blog: "Блог",
  about: "Об адвокате",
  contacts: "Контакты",
  services: "Услуги",
  dashboard: "Приборная панель",
  addpost: "Добавить пост",
  editpost: "Редактировать пост",
  privacy: "Политика обработки данных",
  agreement: "Согласие на обработку персональных данных",
};

export function BreadcrumbAtPage({ title = "" }) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="container py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            {paths === "/" ? null : (
              <BreadcrumbLink asChild>
                <Link href="/">Главная</Link>
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
          {pathNames.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join("/")}`;
            // const linkName = link[0].toUpperCase() + link.slice(1, link.length);
            const linkName =
              translations[link] ||
              link[0].toUpperCase() +
                link.slice(1).split("-").join(" ").slice(0, 30);
            // +  "...";

            const isLastPath = pathNames.length === index + 1;

            return (
              <Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {!isLastPath ? (
                    <BreadcrumbLink asChild>
                      <Link href={href}>{linkName}</Link>
                    </BreadcrumbLink>
                  ) : paths.includes("/blog") || paths.includes("/editpost") ? (
                    <BreadcrumbLink>{title}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{linkName}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
