// url: http://localhost:3010/api/posts/post1
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = await params;
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return NextResponse.json(
        { message: "Пост не найден", error },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка загрузки поста", error },
      { status: 500 }
    );
  }
};

export const PATCH = async (request, props) => {
  const params = await props.params;
  try {
    const { id } = params;
    const body = await request.json();
    const { title, description, image, text, author, category } = body;

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        description,
        image,
        text,
        author,
        category,
      },
    });

    if (!updatedPost) {
      return NextResponse.json(
        { message: "Пост не обновлён", error },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json(
      { message: "Произошла ошибка при обновлении поста", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, props) => {
  const params = await props.params;
  try {
    const { id } = params;
    await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json("Пост удалён");
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка удаления поста", error },
      { status: 500 }
    );
  }
};
