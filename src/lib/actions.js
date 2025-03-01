"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(post) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    revalidatePath("/blog");
    return data;
  } catch (error) {
    return {
      message: "Failed To Add Post",
    };
  }
}

export async function updatePost(post, slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/posts/${slug}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    );
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    throw new Error("Ошибка обновления поста");
  }
}

export async function deletePost({ slug }) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${slug}`, {
      method: "DELETE",
    });
  } catch (error) {
    return {
      message: "Failed To Delete Post",
    };
  }
  redirect("/blog");
}
