"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { deletePost } from "@/lib/actions";

export function DeletePost(slug) {
  const [open, setOpen] = useState(false);

  const deletePostWithId = deletePost.bind(null, slug);
  const deletePostWithIdandUi = () => {
    setOpen(false);
    deletePostWithId();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Удалить</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-4">
          <DialogTitle>Вы уверены, что хотите удалить пост?</DialogTitle>
          <DialogDescription className="flex justify-center space-x-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Нет
            </Button>
            <Button type="submit" onClick={deletePostWithIdandUi}>
              Да
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
