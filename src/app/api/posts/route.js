// url: http://localhost:3010/api/posts
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка загрузки постов", error },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { title, description, image, text, author, category } = body;
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        image,
        text,
        author,
        category,
      },
    });

    if (!newPost) {
      return NextResponse.json(
        { message: "Пост не создан", error },
        { status: 404 }
      );
    }

    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка создания поста", error },
      { status: 500 }
    );
  }
};
