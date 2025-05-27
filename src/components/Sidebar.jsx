import { getAllPosts } from "@/lib/data";
import Link from "next/link";

export const Sidebar = async () => {
  const posts = await getAllPosts();
  // const posts = await res;

  return (
    <div className="sticky top-[94px] h-fit">
      {posts.map((item, index) => (
        <div key={index}>
          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};
