"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

export function Search({ placeholder }) {
  const [text, setText] = useState("");
  const searchParams = useSearchParams("");
  const pathname = usePathname();
  const { replace } = useRouter();
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
    <div className="relative flex justify-center space-y-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <AiOutlineSearch className="relative self-center left-8 h-5 w-5 text-zinc-500 dark:text-zinc-100 peer-focus:text-zinc-500" />
      <Input
        className="peer block w-1/2 rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-zinc-500"
        placeholder={placeholder}
        type="search"
        onChange={handleInput}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
