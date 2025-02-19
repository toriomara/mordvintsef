// url: http://localhost:3010/api/posts/post1
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import slugify from "slugify";

export const GET = async (request, { params }) => {
  const { slug } = await params; // Changed 'id' to 'slug'
  try {
    // Assuming you have a 'slug' field in your Post model in Prisma
    const post = await prisma.post.findUnique({
      where: { slug }, // Use 'slug' to find the post
    });

    if (!post) {
      return NextResponse.json(
        { message: "Пост не найден", error: "Post not found" }, // Added a more specific error message
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error in getPostById:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Ошибка загрузки поста", error: error.message }, // Display the error message
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { title, description, image, text, author, category } = body;
    // const slug = slugify(title, { lower: true, strict: true });

    if (!title || typeof title !== "string") {
      return NextResponse.json(
        { message: "Ошибка: заголовок (title) отсутствует или неверного типа" },
        { status: 400 }
      );
    }

    // Generate slug only if title exists
    // const slug = title
    //   ? slugify(title, { lower: true, strict: true })
    //   : undefined;

    const { slug } = await params;

    const updatedPost = await prisma.post.update({
      where: { slug },
      data: {
        title,
        description,
        image,
        text,
        author,
        category,
        slug,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Ошибка при обновлении поста:", error);
    return NextResponse.json(
      {
        message: "Произошла ошибка при обновлении поста",
        error: error.meta || error.message,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = await params;
  try {
    await prisma.post.delete({
      where: { slug },
    });

    return NextResponse.json(
      { message: "Пост успешно удалён" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка удаления поста", error },
      { status: 500 }
    );
  }
};
