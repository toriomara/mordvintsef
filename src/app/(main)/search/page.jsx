"use client";

import { Suspense } from "react";
import { Loader } from "@/components/Loader";
import { SearchComponent } from "@/components/SearchComponent";

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <SearchComponent />
    </Suspense>
  );
}
