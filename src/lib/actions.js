"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(post) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
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

export async function updatePost(post, id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    throw new Error("Ошибка обновления поста");
  }
}

export async function deletePost({ id }) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    return {
      message: "Failed To Delete Post",
    };
  }
  revalidatePath("/blog");
  redirect("/blog");
}
