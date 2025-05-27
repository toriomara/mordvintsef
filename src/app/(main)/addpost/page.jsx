"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { createPost } from "@/lib/actions";
import Tiptap from "@/components/Tiptap";
import { useRouter } from "next/navigation";
import { TypographyH1 } from "@/components/ui/TypographyH1";

const formSchema = z.object({
  title: z.string().trim().min(5, {
    message: "Заголовок должен содержать не менее 5 символов",
  }),
  description: z.string().trim().min(10, {
    message: "Описание должно содержать не менее 10 символов",
  }),
  image: z.string().url().optional(),
  text: z.string().trim().min(100, {
    message: "Текст должен содержать не менее 100 символов",
  }),
  author: z.string().trim().min(5, {
    message: "Поле автор должно содержать не менее 5 символов",
  }),
  category: z.string(), // Validation select a few SelectItem
});

const AddPostPage = () => {
  const router = useRouter();
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      category: "",
      image: "",
      text: "",
    },
  });

  const { formState } = form;
  const { isDirty, isValid, error } = formState;

  const onSubmit = (post) => {
    createPost(post);
    form.reset();
    router.replace("/blog");
  };

  return (
    <>
      <TypographyH1 position={"flex justify-center"}>
        Добавить пост
      </TypographyH1>
      <div className="flex justify-center">
        <Form {...form}>
          <form
            className="flex flex-col gap-4 w-full max-w-lg space-y-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Заголовок *</FormLabel>
                  <FormControl>
                    <Input placeholder="Название поста" {...field} />
                  </FormControl>
                  <FormDescription>Добавьте заголовок</FormDescription>
                  <FormMessage error={error} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание *</FormLabel>
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
                  <FormLabel>Автор *</FormLabel>
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
                  <FormLabel>Категория *</FormLabel>
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
                  <FormLabel>Текст *</FormLabel>
                  {/* <FormControl> */}
                  {/* <Textarea placeholder="Текст поста" {...field} /> */}
                  <Tiptap
                    {...field}
                    // description={field.name}
                    // onChange={field.onChange}
                    // placeholder="Текст поста"
                  />
                  {/* </FormControl> */}
                  <FormDescription>Добавьте текст поста</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="sm:place-self-end sm:w-fit"
              type="submit"
              disabled={!isValid || !isDirty}
            >
              Добавить
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default AddPostPage;
