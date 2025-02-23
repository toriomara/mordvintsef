"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";
import { HiOutlineExternalLink } from "react-icons/hi";

export const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-background border-t border-zinc-300 dark:border-border mt-10">
      <div className="container py-10">
        <div className="grid border-b pb-4 border-zinc-300 dark:border-border font-light md:grid-cols-2 lg:grid-cols-12 grid-cols-1 gap-6 justify-between items-start text-zinc-900 bg:dark:text-neutral-200 dark:text-zinc-300">
          <div className="grid gap-4 lg:col-span-4 md:col-span-1">
            <Logo />
            <h4 className="font-semibold text-xl">Адвокат Р.Ф. Мордвинцев</h4>
            <a
              className="link group items-center gap-1"
              href="https://www.apvo-volgograd.ru/lawyer-list/register-lawyers/"
              target="blank"
              rel="noopener noreferrer"
            >
              <span>
                Регистрационный номер 34/1803 в Едином государственном реестре
                адвокатов
              </span>
              {/* &nbsp; */}
              <HiOutlineExternalLink
                size={14}
                className="inline-flex text-zinc-400 group-hover:text-primary ml-1"
              />
            </a>
            <p>
              Деятельность осуществляется на основе Федерального закона от 31
              мая 2002&nbsp;г. N&nbsp;63-ФЗ «Об адвокатской деятельности и
              адвокатуре в Российской Федерации»
            </p>
            <Link className="link leading-5 text-sm font-light" href="/privacy">
              Политика в отношении обработки персональных данных
            </Link>
          </div>
          <div className="grid lg:col-span-2 gap-3 md:col-span-1">
            <h4 className="font-semibold text-xl">Информация</h4>
            <div className="grid gap-1 xs:gap-3">
              <Link className="link max-w-max" href="/">
                Главная
              </Link>
              <Link className="link max-w-max" href="/services">
                Услуги
              </Link>
              <Link className="link max-w-max" href="/about">
                Об адвокате
              </Link>
              <Link className="link max-w-max" href="/blog">
                Блог
              </Link>
            </div>
          </div>
          <div className="grid lg:col-span-4 gap-3 md:col-span-1">
            <h4 className="font-semibold text-xl">Контакты</h4>
            <Link
              href="/"
              className="flex max-w-max items-start text-sm xs:text-base"
            >
              <FaMapMarkerAlt
                size={16}
                className="relative top-0.5 mr-3 text-zinc-500"
              />
              <span className="leading-5">
                400005, г. Волгоград, <br />
                ул. Коммунистическая, д.21, оф. 46
              </span>
            </Link>
            <Link
              className="link flex max-w-max items-start text-sm xs:text-base"
              href="mailto:r.mordvintseff@ya.ru"
              passHref={true}
            >
              <FaEnvelope
                size={16}
                className="relative top-0.5 mr-3 text-zinc-500"
              />
              <span>r.mordvintseff@yandex.ru</span>
            </Link>
            <Link
              className="link flex max-w-max items-start text-sm xs:text-base"
              href="tel:+79608670139"
              passHref={true}
            >
              <FaPhoneAlt
                size={16}
                className="relative max-w-max top-0.5 mr-3 text-zinc-500"
              />
              <span>+7 960 867 01 39</span>
            </Link>
          </div>
          <div className="grid lg:col-span-2 gap-4 md:col-span-1">
            <h4 className="font-semibold text-xl">Вопрос</h4>
            <span className="text-sm xs:text-base">Задать вопрос адвокату</span>
            <Button className="w-fit" type="submit">
              Написать
            </Button>
          </div>
        </div>
        <div className="md:flex justify-between align-start pt-4 text-sm">
          <div className="space-y-1">
            <div>
              © {new Date().getFullYear()} Адвокат Р.Ф. Мордвинцев. Все права
              защищены
            </div>
            <div className="flex w-fit group">
              <span>Разработка</span>&nbsp;
              <a
                className="link flex items-center gap-1"
                href="https://telegram.me/toriomara"
                target="_blank"
              >
                toriomara
                <HiOutlineExternalLink
                  size={14}
                  className="inline-flex text-zinc-400 group-hover:text-primary"
                />
              </a>
            </div>
          </div>
          <SocialIcons layout={"flex pt-4 md:pt-0 self-start "} />
        </div>
      </div>
    </footer>
  );
};
