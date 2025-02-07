"use server";

import { Search } from "@/components/Search";
import { SearchedPosts } from "@/components/SearchedPosts";

const SimpleSearch = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="w-[80%] mx-auto my-10">
      <h2 className="flex justify-center text-xl">Поиск</h2>
      <Search />
      <h2>Simple Search</h2>
      <SearchedPosts query={query} />
    </div>
  );
};

export default SimpleSearch;
