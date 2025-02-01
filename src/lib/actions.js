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

export async function updatePost(post, params) {
  post.id = params.id;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/posts/${post.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidatePath(`/blog/${params.id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      message: "Failed To Update Post",
    };
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
