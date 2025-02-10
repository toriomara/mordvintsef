"use server";

import { Loader } from "@/components/Loader";
import { Search } from "@/components/Search";
import { SearchedPosts } from "@/components/SearchedPosts";
import { Suspense } from "react";

const SimpleSearch = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-[80%] mx-auto my-10">
        <h2 className="flex justify-center text-xl">Поиск</h2>
        <Search />
        <h2>Simple Search</h2>
        <SearchedPosts query={query} />
      </div>
    </Suspense>
  );
};

export default SimpleSearch;
