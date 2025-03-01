"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { SocialIcons } from "./SocialIcons";
import { VscSend } from "react-icons/vsc";
import { useState } from "react";

export const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, subject, message }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Сообщение успешно отправлено!");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        alert("Ошибка: " + data.message);
      }
    } catch (error) {
      console.log("Не удалось отправить сообщение: " + error.message);
    }
  };

  return (
    <Card className="container-content my-12 grid md:grid-cols-2 gap-10 p-8 shadow-none">
      <div className="">
        <h5 className="w-full mb-2 text-2xl font-semibold">
          Необходима консультация?
        </h5>
        <p className="w-full mb-4 font-light text-muted-foreground">
          Задайте ваш вопрос и я обязательно отвечу на него. Обычно время ответа
          не более двух дней.
        </p>
        <p className="w-full mb-6 text-muted-foreground">
          Также вы можете задать мне вопрос в социальных сетях и мессенджерах,
          перейдя по ссылкам ниже
        </p>
        <SocialIcons layout={"flex"} />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="block justify-between sm:flex sm:space-x-8 mb-1">
            <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                Почта *
              </label>
              <Input
                name="email"
                type="email"
                id="email"
                required
                placeholder="ivan.baryshnikov@yandex.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block mb-2 text-sm font-medium" htmlFor="phone">
                Телефон *
              </label>
              <Input
                name="phone"
                type="phone"
                id="phone"
                required
                placeholder="123454678945"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end mb-6 text-mx font-light leading-3">
            <span className="pr-1">*</span>
            <div>Необходимо заполнить поле Почта или Телефон</div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium" htmlFor="subject">
              Тема обращения
            </label>
            <Input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Например, спор при межевании земельного участка"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium" htmlFor="message">
              Текст обращения
            </label>
            <Textarea
              name="message"
              id="message"
              placeholder="Опишите вашу ситуацию"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex mt-1 text-mx font-light leading-3">
              <div className="pr-1">**</div>
              <div>
                Нажимая кнопку, вы даете{" "}
                <Link className="hover:underline" href="/agreement">
                  согласие на обработку персональных данных
                </Link>
                . Подробнее об обработке данных в{" "}
                <Link className="hover:underline" href="/privacy">
                  Политике
                </Link>
              </div>
            </div>
          </div>
          <Button className="w-full" type="submit">
            Отправить
            <VscSend />
          </Button>
        </form>
      </div>
    </Card>
  );
};
