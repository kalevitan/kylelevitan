import { ArrowRight } from "lucide-react";
import { MediumPost, MEDIUM_PROFILE } from "@/app/lib/medium";

const formatDate = (pubDate: string) =>
  new Date(pubDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const Writing = ({ posts }: { posts: MediumPost[] }) => {
  return (
    <>
      <div className="layout">
        <section aria-labelledby="writing-heading">
          <h2 id="writing-heading">Writing</h2>
          <div className="writing__introduction">
            <p className="lead" role="doc-subtitle">
              I write about the craft behind the code - how AI is reshaping the way we
              build, what separates a good idea from a validated one, and the lessons
              that show up somewhere between the first commit and the thing people
              actually use.
            </p>
          </div>
        </section>
      </div>
      <div className="layout xl:!col-span-3 xl:mx-40 2xl:mx-60 mx-0 !px-0">
        <section aria-label="Recent articles">
          <ul className="writing__list grid gap-6 grid-cols-1 md:grid-cols-3 max-w-[1472px] m-auto list-none p-0">
            {posts.map((post, index) => (
              <li className="flex" key={post.link}>
                <a
                  className="flex w-full text-inherit no-underline hover:filter-none"
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <article
                    className={`writing__card flex flex-col w-full p-8 shadow-sm rounded ${
                      index % 2 === 0 ? "gradient-left" : "gradient-right"
                    }`}
                  >
                    <header className="writing__header flex flex-col">
                      <span className="text-[var(--gray)] text-sm">
                        <time dateTime={new Date(post.pubDate).toISOString()}>
                          {formatDate(post.pubDate)}
                        </time>
                        {` · ${post.readingMinutes} min read`}
                      </span>
                      <h3 className="writing__title mb-0">{post.title}</h3>
                    </header>
                    <div className="writing__description my-4 text-[var(--gray)]">
                      <p className="leading-relaxed">{post.excerpt}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] no-underline hover:brightness-110 transition-all mt-auto">
                      Read on Medium
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </article>
                </a>
              </li>
            ))}
          </ul>

          <div className="writing__cta flex justify-center pt-12">
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] no-underline hover:brightness-110 transition-all"
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="lni lni-medium-alt" aria-hidden="true"></i>
              Read everything I&apos;ve published on Medium
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Writing;
