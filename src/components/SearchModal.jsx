"use client";

import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, VisuallyHidden } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
// import { VisuallyHidden } from '@radix-ui/react-dialog';

export const SearchModal = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

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
  }, []);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 px-3 py-1 text-xs border rounded-lg hover:bg-zinc-400/20 dark:hover:bg-zinc-900 dark:border-border transition-all duration-300"
        >
          {/* <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-1 px-3 py-1 text-xs border rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-900 dark:border-border"
          > */}
          <Search className="w-3 h-3 text-zinc-500 dark:text-zinc-300" />
          <span className="">Поиск...</span>
          <kbd className="ml-auto px-2 py-1 border rounded bg-zinc-100 dark:bg-black text-zinc-500 dark:text-zinc-300 dark:border-zinc-600">
            Ctrl
          </kbd>
          <kbd className="ml-auto px-2 py-1 border rounded bg-zinc-100 dark:bg-black text-zinc-500 dark:text-zinc-300 dark:border-zinc-600">
            K
          </kbd>
          {/* </button> */}
        </DialogTrigger>
        <DialogContent className="border-border p-0 text-zinc300">
          {/* <VisuallyHidden> */}
            <DialogTitle>Search</DialogTitle>
          {/* </VisuallyHidden> */}
          <Command>
            <div className="relative flex items-center border-b border-zinc-200 p-3">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4" />
              <Input
                placeholder="Поиск..."
                className="w-full pl-10 border-none focus:ring-0"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5"
              >
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
            <Command.List>
              <Command.Empty className="p-4 text-sm text-zinc-500">
                No results found.
              </Command.Empty>
              <Command.Item className="px-4 py-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900">
                Dashboard
              </Command.Item>
              <Command.Item className="px-4 py-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900">
                Profile
              </Command.Item>
              <Command.Item className="px-4 py-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900">
                Settings
              </Command.Item>
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
};
