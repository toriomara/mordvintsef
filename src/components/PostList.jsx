import { getAllPosts } from "@/lib/data";
import { PostCard } from "./PostCard";
import { TypographyH3 } from "./ui/TypographyH3";

export async function PostList({ className }) {
  const posts = await getAllPosts();

  return (
    <div className="grid grid-cols xl:grid-rows 3xl:grid-cols-2 gap-6 md:gap-y-8 md:gap-x-6">
      {posts.length === 0 ? (
        <div className="flex h-full w-full justify-center items-center">
          <TypographyH3 position={"border-none"}>Посты отсутствуют</TypographyH3>
        </div>
      ) : (
        posts
          .reverse()
          .map((post) => (
            <PostCard key={post.id} className={className} post={post} />
          ))
      )}
    </div>
  );
}
