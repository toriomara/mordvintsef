"use server";

import { unstable_noStore as noStore } from "next/cache";

const getAllPosts = async () => {
  noStore();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    throw new Error("Невозможно отобразить посты");
  }
};

const getPostById = async (id) => {
  noStore();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`, {
      cache: "no-store",
    });

    if (!res) {
      return NotFound;
    }
    return res.json();
  } catch (error) {
    throw new Error("Невозможно отобразить пост");
  }
};

const getPostBySearch = async (search) => {
  noStore();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/posts?q=${search}`
  );
  if (!res.ok) throw new Error("Невозможно отобразить пост");

  return res.json();
};

export { getAllPosts, getPostById, getPostBySearch };
