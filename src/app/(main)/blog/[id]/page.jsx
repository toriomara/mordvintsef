"use server";

import { Suspense } from "react";
import Image from "next/image";
import { Loader } from "@/components/Loader";
import { getPostById } from "@/lib/data";
import { Sidebar } from "@/components/Sidebar";
import { EditBlock } from "@/components/EditBlock";
import { SocialIcons } from "@/components/SocialIcons";

export default async function Post({ params }) {
  const newParams = await params;
  const post = await getPostById(newParams.id);
  const text = await post.text.split("<>");

  console.log("POST PAGE ===>>", post);

  return (
    <div className="grid grid-cols lg:grid-cols-[5fr,1fr] w-[80%] mx-auto gap-8">
      <div>
        <Suspense fallback={<Loader />}>
          <article className="grid sm:grid-cols-[min-content,_1fr] sm:grid-rows-[repeat(6, minmax(0, 1fr))] gap-6">
            <div></div>
            <h1 className="col-span-2 sm:col-span-1 py-3 text-2xl xs:text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl text-center">
              {post.title}
            </h1>
            <div className="hidden xs:block"></div>
            <div className="grid col-span-2 sm:col-span-1 md:flex md:justify-center items-end md:space-x-6">
              <span className="text-primary self-center">{post.category}</span>
              <span className="text-xl">{post.author}</span>
              <span className="leading-snug font-semibold text-lg text-zinc-600 dark:text-zinc-400">
                {new Date(post.createdAt)
                  .toLocaleDateString("ru-RU")
                  .replace(/\//g, ".")}
              </span>
            </div>
            <div className="hidden sm:grid col-span-1 sm:self-start">
              <SocialIcons layout={"grid"} />
            </div>
            <div className="relative col-span-2 sm:col-span-1 w-full h-80">
              <Image
                className="top-0 left-0 object-cover rounded-lg border border-border shadow-lg"
                src={post.image || "/images/placeholderImage.svg"}
                alt={post.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
            <div className="col-span-2 flex sm:hidden">
              <SocialIcons layout={"flex"} />
            </div>
            <div></div>
            <div className="col-span-2 sm:col-span-1 leading-7">
              {text.map((item) => (
                <div key={item}>
                  <div dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
            <div />
            <div className="col-span-2 sm:col-span-1">
              <EditBlock post={post} />
            </div>
          </article>
        </Suspense>
      </div>
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
    </div>
  );
}

// notFound? if post undefined
