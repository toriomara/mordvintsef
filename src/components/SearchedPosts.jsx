"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useDeferredValue } from "react";
import { getAllPosts } from "@/lib/data";
import { Loader } from "./Loader";
import { TypographyH3 } from "./ui/TypographyH3";

function nPosts(n) {
  n = Math.abs(n) % 100000;
  const number = n % 10;
  return n > 10 && n < 20
    ? `${n} постов`
    : number > 1 && number < 5
    ? `${n} поста`
    : number === 1
    ? `${n} пост`
    : `${n} постов`;
}

export const SearchedPosts = ({ query, open, setOpen, closeDrawer }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const deferredQuery = useDeferredValue(query.toLowerCase());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllPosts();
        setPosts(result);
      } catch (error) {
        console.error("Ошибка загрузки постов:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredPosts = deferredQuery
    ? posts.filter((post) => post.text.toLowerCase().includes(deferredQuery))
    : posts;

  const handleClick = () => {
    setOpen(!open);
    closeDrawer();
  };

  return (
    <div className="px-8">
      {isLoading ? (
        <div className="flex w-full h-[100%] justify-center items-center">
          <Loader />
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="grid items-center justify-center">
          <TypographyH3 position={"my-4 mx-4 border-none"}>
            По запросу "{query}" ничего не найдено
          </TypographyH3>
        </div>
      ) : (
        <>
          <TypographyH3 position={"my-4 border-none"}>
            Результат поиска: {nPosts(filteredPosts.length)}
          </TypographyH3>
          <div className="grid grid-cols-1 gap-1 max-h-max">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                onClick={handleClick}
                href={`${process.env.NEXT_PUBLIC_URL}/blog/${post.id}`}
              >
                <div className="grid grid-cols-[100px_minmax(80px,_1fr)] my-1 gap-3 text-xs rounded-md border border-border hover:shadow-lg transition-shadow items-center">
                  <div>
                    <Image
                      src={post.image || "/default-image.jpg"}
                      alt={post.title || "Post image"}
                      height={100}
                      width={100}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-md font-semibold">{post.title}</span>
                    <span className="text-xs font-light">
                      {new Date(post.createdAt)
                        .toLocaleDateString("ru-RU")
                        .replace(/\//g, ".")}
                    </span>
                    <span className="text-xs font-light">
                      {post.description}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
