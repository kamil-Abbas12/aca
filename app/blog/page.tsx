import { BLOGS } from "@/data/blogs";
import BlogCard from "../components/BlogCard";
import Link from "next/link";

const BASE_URL = "https://affordablecareact.topdoglead.com";
const POSTS_PER_PAGE = 9;

// Ensures the grid always reflects the current BLOGS array instead of
// serving a stale statically-generated page.
export const revalidate = 0;

export const metadata = {
  title: "Health Insurance Blog | ACA Tips & Guides",
  description:
    "Browse expert health insurance tips, ACA Marketplace guides, subsidy explainers, and enrollment advice to help you find affordable coverage.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

export default async function BlogGridPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const totalPages = Math.max(1, Math.ceil(BLOGS.length / POSTS_PER_PAGE));
  const currentPage = Math.min(
    Math.max(1, Number(pageParam) || 1),
    totalPages
  );

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = BLOGS.slice(start, start + POSTS_PER_PAGE);

  return (
    <main className="min-h-screen bg-[#f7efe6]">
      <div className="mx-auto max-w-6xl px-4 py-25 xl:py-30">
        <h1 className="text-3xl font-extrabold text-[#0b2b55]">
          Health Insurance Blog
        </h1>
        <p className="mt-2 text-sm text-[#0b2b55]/70">
          Browse the latest health insurance articles, ACA enrollment tips, and coverage guides.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            {/* Prev */}
            {currentPage > 1 ? (
              <Link
                href={currentPage - 1 === 1 ? "/blog" : `/blog?page=${currentPage - 1}`}
                aria-label="Go to previous page"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/10 hover:shadow-md transition"
              >
                ← Prev
              </Link>
            ) : (
              <span
                aria-hidden="true"
                className="rounded-full bg-white/50 px-4 py-2 text-sm font-semibold text-[#0b2b55]/40 ring-1 ring-black/5"
              >
                ← Prev
              </span>
            )}

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <Link
                key={num}
                href={num === 1 ? "/blog" : `/blog?page=${num}`}
                aria-label={`Go to page ${num}`}
                aria-current={num === currentPage ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 transition ${
                  num === currentPage
                    ? "bg-[#0b2b55] text-white ring-[#0b2b55]"
                    : "bg-white text-[#0b2b55] ring-black/10 hover:shadow-md"
                }`}
              >
                {num}
              </Link>
            ))}

            {/* Next */}
            {currentPage < totalPages ? (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                aria-label="Go to next page"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/10 hover:shadow-md transition"
              >
                Next →
              </Link>
            ) : (
              <span
                aria-hidden="true"
                className="rounded-full bg-white/50 px-4 py-2 text-sm font-semibold text-[#0b2b55]/40 ring-1 ring-black/5"
              >
                Next →
              </span>
            )}
          </nav>
        )}
      </div>
    </main>
  );
}