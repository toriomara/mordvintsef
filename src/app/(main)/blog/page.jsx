import { Suspense } from "react";
import { Loader } from "@/components/Loader";
import { PostList } from "@/components/PostList";
import { Sidebar } from "@/components/Sidebar";
import { AddPostButton } from "@/components/AddPostButton";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata = {
  title: "Блог",
  description: "Блог адвоката Романа Фёдоровича Мордвинцева",
};

export default async function BlogPage() {
  return (
    <div className="grid grid-cols lg:grid-cols-[5fr,1fr] container-content gap-8">
      <div>
        <TypographyH1 position={"text-center"}>Блог</TypographyH1>
        <AddPostButton />
        <Suspense fallback={<Loader />}>
          <ErrorBoundary>
            <PostList />
          </ErrorBoundary>
        </Suspense>
      </div>
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
    </div>
  );
}
