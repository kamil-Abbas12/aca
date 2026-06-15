import { BLOGS, ContentBlock } from "@/app/data/blogs";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const post = BLOGS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog | Healthcare Insights" };
  }

  return {
    title: `${post.title} | Healthcare Insights`,
    description: post.excerpt || post.caption || "Health insurance tips and insights",
  };
}

function RenderBlock({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="mt-8 mb-3 text-xl font-extrabold text-[#0b2b55] border-l-4 border-blue-500 pl-3"
        >
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p key={index} className="mb-4 leading-relaxed text-[#0b2b55]/90">
          {block.text}
        </p>
      );

    case "bullets":
      return (
        <ul key={index} className="mb-4 ml-5 list-disc space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="leading-relaxed text-[#0b2b55]/90">
              {item.bold && (
                <span className="font-bold text-[#0b2b55]">{item.bold}</span>
              )}
              {item.text}
            </li>
          ))}
        </ul>
      );

    case "pro_tip":
      return (
        <div
          key={index}
          className="mb-4 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4"
        >
          <p className="leading-relaxed text-[#0b2b55]/90">
            <span className="font-bold text-blue-700">💡 Pro Tip:</span>{" "}
            {block.text}
          </p>
        </div>
      );

    case "table":
      return (
        <div key={index} className="mb-6 overflow-x-auto rounded-xl ring-1 ring-black/10 shadow-sm">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-blue-700 text-white">
                {block.headers.map((header, h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-bold tracking-wide"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr
                  key={r}
                  className={r % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`px-4 py-3 text-[#0b2b55]/90 border-b border-gray-100 ${
                        c === 0 ? "font-bold text-[#0b2b55]" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "closing":
      return (
        <p
          key={index}
          className="mt-8 rounded-xl bg-[#0b2b55] px-6 py-4 text-base font-bold italic leading-relaxed text-white"
        >
          {block.text}
        </p>
      );

    default:
      return null;
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOGS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f7efe6] mt-20" role="main">
        <div className="mx-auto max-w-3xl px-4 py-40 text-center">
          <h1 className="text-2xl font-extrabold text-[#0b2b55]">
            Post not found
          </h1>
          <Link
            href="/blog"
            aria-label="Go back to blog page"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7efe6]" role="main">
      <article className="mx-auto max-w-3xl px-4 py-20">

        {/* Header */}
        <header>
          <Link
            href="/blog"
            aria-label="Go back to blog list"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            ← Back to Blog
          </Link>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#0b2b55]">
            {post.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#0b2b55]/70">
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden="true">•</span>
            <span>{post.category}</span>
            <span aria-hidden="true">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Caption */}
        <p className="mt-6 text-center text-base italic leading-relaxed text-[#0b2b55]/80 border-l-4 border-blue-300 pl-4 text-left">
          {post.caption}
        </p>

        {/* Hero Image */}
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md">
          <Image
            src={post.image}
            alt={`Image for ${post.title}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <section className="mt-8 max-w-none">
          {post.content.map((block, i) => (
            <RenderBlock key={i} block={block} index={i} />
          ))}
        </section>

        {/* Navigation */}
        <nav className="mt-10 flex flex-wrap gap-3" aria-label="Blog navigation">
          <Link
            href="/blog"
            aria-label="Go to blog grid page"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/10 hover:shadow-md transition"
          >
            View Blog Grid
          </Link>

          <Link
            href="/blog/sidebar"
            aria-label="Go to blog sidebar page"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/10 hover:shadow-md transition"
          >
            View Blog Sidebar
          </Link>
        </nav>

      </article>
    </main>
  );
}