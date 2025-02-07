"use client";

import { getAllPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const SearchedPosts = ({ query }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllPosts();
        setPosts(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [query]);

  const filteredPosts = Array.isArray(posts)
    ? posts.filter((post) => {
        return post.text.toLowerCase().includes(query.toLowerCase());
      })
    : null;

  return (
    <div>
      {filteredPosts.length === 0 ? (
        <h3>No posts</h3>
      ) : (
        <>
          <h3>Найдено: {filteredPosts.length}</h3>
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`${process.env.NEXT_PUBLIC_URL}/blog/${post.id}`}
            >
              <div className="flex my-4 p-4 gap-4 rounded-md border-[1px] border-zinc-600 w-full">
                <div>
                  <Image
                    src={post.image || ""}
                    alt={post.image}
                    height={100}
                    width={120}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-md font-semibold">{post.title}</span>
                  <span className="text-md font-light">
                    {post.createdAt
                      .slice(0, 10)
                      .replace(/-/g, ".")
                      .split(".")
                      .reverse()
                      .join(".")}
                  </span>
                  <span className="text-sm font-light">{post.description}</span>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};
