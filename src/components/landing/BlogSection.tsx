import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  href: string;
  author?: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3;
  viewAllHref?: string;
}

export default function BlogSection({
  posts,
  title = 'Blog & Recursos',
  subtitle = 'Artículos, reflexiones y enseñanzas',
  columns = 3,
  viewAllHref,
}: BlogSectionProps) {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
            Artículos
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D] md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-[#14213D]/70">
              {subtitle}
            </p>
          )}
        </div>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-[#FCA311] font-semibold hover:underline transition"
          >
            Ver todo →
          </Link>
        )}
      </div>

      {/* Posts Grid */}
      <div className={`grid grid-cols-1 gap-8 ${gridClass[columns]}`}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#14213D]/20 bg-white/50 shadow-[0_12px_22px_rgba(0,0,0,0.08)] transition hover:shadow-[0_20px_32px_rgba(252,163,17,0.15)]"
          >
            {/* Image */}
            {post.image && (
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#14213D]/10 to-[#FCA311]/10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/30 to-transparent" />
              </div>
            )}

            {/* Content */}
            <div className="flex flex-1 flex-col px-6 py-5">
              {/* Meta */}
              <div className="flex items-center gap-3 text-sm text-[#14213D]/70 mb-3">
                <span className="rounded-full bg-[#FCA311]/10 px-3 py-1 text-[#FCA311] font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#14213D] mb-2 group-hover:text-[#FCA311] transition line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-base text-[#14213D]/80 flex-1 line-clamp-2 mb-4">
                {post.excerpt}
              </p>

              {/* Author */}
              {post.author && (
                <p className="text-sm font-medium text-[#14213D]/60 border-t border-[#14213D]/10 pt-4">
                  Por {post.author}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
