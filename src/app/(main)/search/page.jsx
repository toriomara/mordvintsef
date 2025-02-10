"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchedPosts } from "@/components/SearchedPosts";
import { Search } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";
import { TypographyH2 } from "@/components/ui/TypographyH2";
import { Loader } from "@/components/Loader";

const SearchPage = () => {
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
    <Suspense fallback={<Loader />}>
      <div>
        <div className="relative flex h-14 text-3xl text-primary items-center border-b">
          <Search className="absolute w-4 h-9 left-4" />
          <Input
            className="w-[92%] h-[100%] text-xl md:text-lg p-0 pl-10 bg-card border-none focus-visible:ring-0"
            placeholder="Поиск..."
            type="search"
            onChange={handleInput}
            defaultValue={searchParams.get("query")?.toString()}
          />
        </div>
        <TypographyH2>Результаты поиска</TypographyH2>
        <SearchedPosts query={query} />
      </div>
    </Suspense>
  );
};

export default SearchPage;
