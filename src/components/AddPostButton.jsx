"use client";

import Link from "next/link";
import { useAuth } from "@clerk/clerk-react";
import { Button } from "./ui/button";

export const AddPostButton = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      {isSignedIn ? (
        <div className="space-x-6 mb-6 justify-end flex">
          <Link href="/addpost">
            <Button>Добавить пост</Button>
          </Link>
        </div>
      ) : null}
    </>
  );
};
