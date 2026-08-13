// app/components/RelatedArticles.tsx
import Link from "next/link";
import Image from "next/image";
import { BLOGS, BlogPost } from "@/data/blogs";

interface RelatedArticlesProps {
  currentSlug: string;
  category: string;
  limit?: number;
}

/**
 * Picks related posts using a simple scoring pass:
 *  - same category = highest priority
 *  - falls back to most recent posts if the category doesn't have enough
 * This guarantees every post links out to at least `limit` others,
 * which fixes the "only one dofollow inlink" issue across the blog.
 */
function getRelatedPosts(currentSlug: string, category: string, limit: number): BlogPost[] {
  const others = BLOGS.filter((p) => p.slug !== currentSlug);

  const sameCategory = others.filter((p) => p.category === category);
  const rest = others.filter((p) => p.category !== category);

  // Sort each group by date (newest first) so related picks stay fresh
  const byDateDesc = (a: BlogPost, b: BlogPost) =>
    new Date(b.date).getTime() - new Date(a.date).getTime();

  const combined = [...sameCategory.sort(byDateDesc), ...rest.sort(byDateDesc)];

  return combined.slice(0, limit);
}

export default function RelatedArticles({
  currentSlug,
  category,
  limit = 3,
}: RelatedArticlesProps) {
  const related = getRelatedPosts(currentSlug, category, limit);

  if (related.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby="related-articles-heading">
      <h2
        id="related-articles-heading"
        className="mb-5 text-xl font-extrabold text-[#0b2b55] border-l-4 border-blue-500 pl-3"
      >
        Related Articles
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={`Image for ${post.title}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                {post.category}
              </span>
              <h3 className="mt-1 text-sm font-bold leading-snug text-[#0b2b55] line-clamp-2">
                {post.title}
              </h3>
              <span className="mt-auto pt-3 text-xs text-[#0b2b55]/60">
                {post.readTime}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}