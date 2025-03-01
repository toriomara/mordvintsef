"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/lib/send-email";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { SocialIcons } from "./SocialIcons";
import { VscSend } from "react-icons/vsc";

const contactFormSchema = z.object({
  email: z.string().email({ message: "Пожалуйста, введите правильный email" }),
  phone: z
    .string()
    .min(10, "Телефон должен содержать не менее 10 символов")
    .max(15, "Телефон должен содержать не более 15 символов")
    .regex(/^\+?[0-9\s-]+$/, "Некорректный формат телефона"),
  subject: z
    .string()
    .min(5, "Тема обязательна должно содержать минимум 5 знаков"),
  message: z.string().min(30, {
    message: "Сообщение обязательно и должно содержать минимум 30 знаков",
  }),
});

export const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values) => {
    const mailText = `Phone: ${values.phone}\n  Email: ${values.email}\n Subject: ${values.subject}\n Message: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "Новое обращение",
      text: mailText,
    });
    // if (response?.message) {
    //   toast.success("Application Submitted Successfully.");
    // } else {
    //   toast.error("Failed To send application.");
    // }
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="block justify-between sm:flex sm:space-x-8 mb-1">
              <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="email"
                >
                  Почта *
                </label>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="ivan.baryshnikov@yandex.ru"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="phone"
                >
                  Телефон *
                </label>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="+7 999 888 77 44" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-end mb-6 text-mx font-light leading-3">
              <span className="pr-1">*</span>
              <div>Необходимо заполнить поле Почта или Телефон</div>
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="subject"
              >
                Тема обращения
              </label>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Например, спор при межевании земельного участка"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="message"
              >
                Текст обращения
              </label>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Опишите вашу ситуацию"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
            <Button className="w-full" disabled={isLoading}>
              {isLoading ? "Отправка....." : "Отправить"}
            </Button>
            {/* <Button className="w-full" type="submit">
              Отправить
              <VscSend />
            </Button> */}
          </form>
        </Form>
      </div>
    </Card>
  );
};
