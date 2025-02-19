"use client";

import { useAuth } from "@clerk/clerk-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { DeletePost } from "./DeletePost";

export const EditBlock = ({ post }) => {
  const { isSignedIn } = useAuth();

  return (
    <>
      {isSignedIn ? (
        <div className="grid justify-start xs:flex gap-4 py-4">
          <DeletePost id={post.id} />
          <Link href={{ pathname: `/editpost/${post.slug}`}}>
            <Button>Редактировать</Button>
          </Link>
        </div>
      ) : null}
    </>
  );
};
