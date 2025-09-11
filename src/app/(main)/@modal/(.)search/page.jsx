"use client";

import { useState, useEffect } from "react";
import { Command } from "cmdk";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SearchComponent } from "@/components/SearchComponent";

function SearchModalPage({ closeDrawer }) {
  const [open, setOpen] = useState(false);

  // ⌘ + K or Ctrl + K to open the modal
  useEffect(() => {
    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.keyCode === 75) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 px-3 py-1 text-xs border rounded-lg hover:bg-zinc-400/20 dark:hover:bg-zinc-900 dark:border-border transition-all duration-300"
      >
        <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-300" />
        <span className="mx-1">Поиск...</span>
        <kbd className="ml-auto px-2 py-1 border rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-300 dark:border-zinc-600">
          Ctrl
        </kbd>
        <kbd className="ml-auto px-2 py-1 border rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-300 dark:border-zinc-600">
          K
        </kbd>
      </DialogTrigger>
      <DialogContent className="block w-full max-h-[70vh] h-fit overflow-y-auto sm:w-2/3 md:w-1/2 bg-card p-0 text-zinc-800 dark:text-zinc-300 border-none">
        <DialogDescription className="sr-only">
          Диалоговое окно для поиска по сайту
        </DialogDescription>
        <DialogTitle className="h-fit">
          <VisuallyHidden>Поиск</VisuallyHidden>
        </DialogTitle>
        <Command>
          <SearchComponent
            open={open}
            setOpen={setOpen}
            closeDrawer={closeDrawer}
          />
        </Command>
      </DialogContent>
    </Dialog>
  );
}

export { SearchModalPage };
