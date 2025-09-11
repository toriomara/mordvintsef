import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const PostCard = ({ className, post, ...props }) => {
  // console.log("Image ===>>", post.image);

  return (
    <Card
      key={post.id}
      className={cn(
        "grid grid-rows-[1fr,2fr] sm:grid-rows-[1fr,1fr] md:grid-cols-[1fr,2fr] md:grid-rows-none gap-2 shadow-lg hover:shadow-none transition-all delay-100 duration-300 overflow-hidden",
        className
      )}
      {...props}
    >
      <CardHeader className="relative">
        <Link href={`/blog/${post.slug}`}>
          <Image
            className="object-cover rounded-t-md md:rounded-l-md md:rounded-r-none hover:grayscale-[0.5] transform hover:scale-y-105 origin-top hover:md:scale-x-105 md:origin-left transition-all delay-150 duration-500"
            src={post.image || "/images/placeholderImage.svg"}
            alt={post.title}
            priority
            fill
          />
        </Link>
      </CardHeader>
      <CardContent className="grid gap-4 grid-cols-1 p-3 xs:p-4 md:p-6">
        <div className="grid gap-3 sm:flex justify-between">
          <Badge>{post.category}</Badge>
          <span className="flex sm:justify-end order-first sm:order-last font-light text-sm">
            {new Date(post.createdAt)
              .toLocaleDateString("ru-RU")
              .replace(/\//g, ".")}
          </span>
        </div>
        <CardTitle className="text-2xl leading-normal scroll-m-20 md:text-2xl">
          <Link href={`/blog/${post.slug}`} key={post.id}>
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-zinc-800 dark:text-zinc-300">
          {`${post.description.substring(0, 200)}...`}
        </CardDescription>
        <CardFooter className="grid sm:grid sm:grid-cols-2 gap-4 p-0">
          <span>{post.author}</span>
          <Link
            className="w-fit sm:place-self-end"
            href={`/blog/${post.slug}`}
            key={post.id}
          >
            <Button>Подробнее</Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
