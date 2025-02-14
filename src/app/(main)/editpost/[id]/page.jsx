"use client";

import React, { use, useEffect, useState, useMemo } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updatePost } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Tiptap from "@/components/Tiptap";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import { Loader } from "@/components/Loader";

const formSchema = z.object({
  title: z.string().trim().min(5, {
    message: "Заголовок должен содержать не менее 2 символов",
  }),
  description: z.string().trim().min(10, {
    message: "Описание должно содержать не менее 10 символов",
  }),
  author: z.string().trim().min(2, {
    message: "Поле автор должно содержать не менее 10 символов",
  }),
  category: z.string(), // Validation by select a few SelectItem
  image: z.string().optional(),
  text: z.string().trim().min(2, {
    message: "Текст должен содержать не менее 100 символов",
  }),
});

export default function EditPostPage({ params }) {
  const router = useRouter();
  const [post, setPost] = useState("");
  const { id } = React.use(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`
        );
        const data = await res.json();
        console.log("1.DATA ==>>>", data);
        setPost(data);
      } catch (error) {
        throw new Error("Невозможно отобразить пост Front");
      } finally {
        console.log("EVERYTHING IS OK");
      }
    };
    fetchData();
  }, [id]);

  console.log("2.NEW POST ==>>>", post);
  console.log("3.POST ==>>>", post.title);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      category: "",
      image: "",
      text: "",
    },
    post,
  });

  useEffect(() => {
    if (post) {
      form.reset(post); // Reset form with fetched post data
    }
  }, [post, form]);

  const { formState } = form;
  const { isDirty, isValid, error } = formState;

  const onSubmit = async (data) => {
    try {
      await updatePost(data, id);
      router.push(`/blog/${id}`);
    } catch (error) {
      console.error("Ошибка при обновлении поста", error);
    }
  };

  if (!post) {
    return <Loader />;
  }

  return (
    <div className="w-[80%] mx-auto">
      <TypographyH1 position={"flex justify-center py-4"}>
        Редактирование поста
      </TypographyH1>
      <div className="flex justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full max-w-2xl space-y-2"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Заголовок</FormLabel>
                  <FormControl>
                    <Input placeholder="Название поста" {...field} />
                  </FormControl>
                  <FormDescription>Заголовок поста</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание</FormLabel>
                  <FormControl>
                    <Input placeholder="Описание поста" {...field} />
                  </FormControl>
                  <FormDescription>Краткое содержание поста</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Автор</FormLabel>
                  <FormControl>
                    <Input placeholder="Автор поста" {...field} />
                  </FormControl>
                  <FormDescription>Добавьте своё имя</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Категория</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="административное право">
                        Административное право
                      </SelectItem>
                      <SelectItem value="уголовные дела">
                        Уголовные дела
                      </SelectItem>
                      <SelectItem value="семейный адвокат">
                        Семейный адвокат
                      </SelectItem>
                    </SelectContent>
                    <FormDescription>Выберите категорию</FormDescription>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Изображение</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Добавьте изображение"
                      // type="file"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Добавьте ссылку на изображение
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Текст</FormLabel>
                  {/* <FormControl> */}
                    <Tiptap
                      {...field}
                      onChange={(content) => field.onChange(content)}
                      content={field}
                    />
                  {/* </FormControl> */}
                  <FormDescription>Добавьте текст поста</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={!isValid || !isDirty || error}>
              Сохранить
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
