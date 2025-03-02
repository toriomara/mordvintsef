"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchedPosts } from "@/components/SearchedPosts";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";
import { TypographyH2 } from "@/components/ui/TypographyH2";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchComponent = ({ open, setOpen, closeDrawer }) => {
  const [text, setText] = useState("");
  const { replace } = useRouter();

  const searchParams = useSearchParams("");
  const pathname = usePathname();
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="max-h-fit">
      <div className="relative flex h-14 text-3xl text-primary items-center border-b">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <AiOutlineSearch className="relative self-center left-8 h-5 w-5 text-zinc-500 dark:text-zinc-100 peer-focus:text-zinc-500" />
        <Input
          className="w-[92%] h-[100%] text-xl md:text-lg p-0 pl-10 bg-card border-none focus-visible:ring-0"
          placeholder="Поиск..."
          type="search"
          onChange={handleInput}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <div className="h-[90%] sm:h-96 overflow-y-auto">
        <SearchedPosts
          query={query}
          open={open}
          setOpen={setOpen}
          closeDrawer={closeDrawer}
        />
      </div>
    </div>
  );
};
