"use client";

import { Loader } from "@/components/Loader";
import { SearchComponent } from "@/components/SearchComponent";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <SearchComponent />;
    </Suspense>
  );
}
