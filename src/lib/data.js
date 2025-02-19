"use server";

import { unstable_noStore as noStore } from "next/cache";

export async function getAllPosts() {
  noStore();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    throw new Error("Невозможно отобразить посты");
  }
}

// [slug] or [id]? It's working both
export async function getPostById(slug) {
  noStore();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/posts/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res) {
      return NotFound;
    }
    return res.json();
  } catch (error) {
    throw new Error("Невозможно отобразить пост");
  }
}

export async function getPostBySearch(search) {
  noStore();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/posts?q=${search}`
  );
  if (!res.ok) throw new Error("Невозможно отобразить пост");

  return res.json();
}
