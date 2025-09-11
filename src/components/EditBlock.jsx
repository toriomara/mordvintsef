"use client";

import Link from "next/link";
import { useAuth } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { DeletePost } from "./DeletePost";

export const EditBlock = ({ post }) => {
  const { isSignedIn } = useAuth();

  return (
    <>
      {isSignedIn ? (
        <div className="grid justify-start xs:flex gap-4 py-4">
          <DeletePost slug={post.slug} />
          <Link href={{ pathname: `/editpost/${post.slug}` }}>
            <Button>Редактировать</Button>
          </Link>
        </div>
      ) : null}
    </>
  );
};
