// "use client";

// import { useCallback, useEffect, useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { SearchedPosts } from "@/components/SearchedPosts";
// import { Input } from "@/components/ui/input";
// import { useDebounce } from "@/hooks/useDebounce";
// import { AiOutlineSearch } from "react-icons/ai";

// export const SearchComponent = ({ open, setOpen, closeDrawer }) => {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   // Получаем начальное значение из URL параметров
//   const initialQuery = searchParams.get("query") || "";
//   const [text, setText] = useState(initialQuery);
//   const debouncedQuery = useDebounce(text, 500);

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams);

//     if (debouncedQuery) {
//       params.set("query", debouncedQuery);
//     } else {
//       params.delete("query");
//     }

//     replace(`${pathname}?${params.toString()}`);
//   }, [debouncedQuery, pathname, replace, searchParams]);

//   // Обработчик ввода с useCallback для оптимизации
//   const handleInput = useCallback((e) => {
//     setText(e.target.value);
//   }, []);

//   // Сброс поиска при закрытии
//   useEffect(() => {
//     if (!open) {
//       setText("");
//     }
//   }, [open]);

//   return (
//     <>
//       <div className="relative flex h-14 text-3xl text-primary items-center border-b">
//         <label htmlFor="search" className="sr-only">
//           Search
//         </label>
//         <AiOutlineSearch className="relative self-center left-8 h-5 w-5 text-zinc-500 dark:text-zinc-100 peer-focus:text-zinc-500" />
//         <Input
//           className="w-[92%] h-[100%] text-xl md:text-lg p-0 pl-10 bg-card border-none focus-visible:ring-0"
//           placeholder="Поиск..."
//           type="search"
//           value={text}
//           onChange={handleInput}
//           autoFocus={open}
//         />
//       </div>
//       <div className="flex px-8 content-center">
//         <SearchedPosts
//           query={debouncedQuery}
//           open={open}
//           setOpen={setOpen}
//           closeDrawer={closeDrawer}
//         />
//       </div>
//     </>
//   );
// };

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchedPosts } from "@/components/SearchedPosts";
import { getAllPosts } from "@/lib/data";

export const SearchComponent = ({ open, setOpen, closeDrawer }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // начальное значение
  const initialQuery = searchParams.get("query") || "";
  const [text, setText] = useState(initialQuery);
  const debouncedQuery = useDebounce(text, 500);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // грузим все посты один раз
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllPosts();
        setPosts(result);
      } catch (error) {
        console.error("Ошибка загрузки постов:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // обновляем URL при изменении запроса
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedQuery) {
      params.set("query", debouncedQuery);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, [debouncedQuery, pathname, replace, searchParams]);

  // фильтрация (мемоизирована)
  const filteredPosts = useMemo(() => {
    if (!debouncedQuery) return posts;
    return posts.filter((p) =>
      p.text.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [posts, debouncedQuery]);

  const handleInput = useCallback((e) => {
    setText(e.target.value);
  }, []);

  // сброс при закрытии поиска
  useEffect(() => {
    if (!open) {
      setText("");
    }
  }, [open]);

  const handleClickPost = () => {
    setOpen(false);
    closeDrawer();
  };

  return (
    <>
      <div className="relative flex h-14 text-3xl text-primary items-center border-b">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <AiOutlineSearch className="relative self-center left-8 h-5 w-5 text-zinc-500 dark:text-zinc-100 peer-focus:text-zinc-500" />
        <Input
          className="w-[92%] h-[100%] text-xl md:text-lg p-0 pl-10 bg-card border-none focus-visible:ring-0"
          placeholder="Поиск..."
          type="search"
          value={text}
          onChange={handleInput}
          autoFocus={open}
        />
      </div>
      <div className="flex px-8 content-center">
        <SearchedPosts
          posts={filteredPosts}
          isLoading={isLoading}
          query={debouncedQuery}
          onClickPost={handleClickPost}
        />
      </div>
    </>
  );
};
