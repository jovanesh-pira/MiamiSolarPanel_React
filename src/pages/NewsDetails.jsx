import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/sanity";
import { urlFor } from "../lib/sanity";
import { NEWS } from "../Alldata/newsData";
import Loading from "../Component/Loading";
function NewsDetails() {
  let { id } = useParams();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(
        `*[_type == "news" && _id == $id][0]{
        _id,
        title,
        date,
        category,
        summary,
        content,
        image,
        facts
      }`,
        { id }
      )
      .then((data) => {
        if (!data) {
          setNews(null);
          setLoading(false);
          return;
        }
        // add an `id` alias so other parts of the app can compare with static `NEWS` items
        setNews({ ...data, id: data._id });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
        setNews(null);
        setLoading(false);
      });
  }, [id]);
  // ensure id type matches (use string comparison) to avoid loose equality issues

  if (loading) {
    return <Loading text="Loading news..." />;
  }

  if (!news) {
    return (
      <div className="min-h-[80vh]  text-slate-950 flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-y-10">
          <p className="text-2xl font-semibold mb-2">News not found</p>
          <Link
            to="/news"
            className="text-white bg-black hover:bg-black/80 px-10 py-5 text-xl rounded-2xl"
          >
            Back to news page
          </Link>
        </div>
      </div>
    );
  }
  const {
    title,
    category,
    date,
    location,
    readTime,
    image,
    excerpt,
    content,
    summary,
  } = news;

  // Simple Portable Text renderer: convert `block` nodes to paragraphs and render images
  const renderPortableText = (blocks) => {
    if (!blocks) return null;
    if (typeof blocks === "string") return <p>{blocks}</p>;
    if (!Array.isArray(blocks)) return null;

    return blocks.map((block, idx) => {
      if (block._type === "block") {
        const text = (block.children || []).map((c) => c.text || "").join("");
        return (
          <p key={idx} className="mb-4">
            {text}
          </p>
        );
      }

      if (block._type === "image") {
        return (
          <div key={idx} className="mb-4">
            <img
              src={urlFor(block).width(1200).quality(80).url()}
              alt={block.alt || title}
              className="w-full object-cover rounded"
              loading="lazy"
            />
          </div>
        );
      }

      return null;
    });
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 pt-4 pb-16">
        <nav className="text-sm text-slate-700 mb-6" aria-label="Breadcrumb">
          <ol className="flex gap-1 flex-wrap">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/news" className="hover:text-blue-400">
                News
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-500 line-clamp-1 max-w-[200px]">
              {title}
            </li>
          </ol>
        </nav>

        <div className="md:hidden mb-6  flex items-center gap-3 flex-wrap text-xs">
          <span className=" inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 font-semibold text-blue-300 uppercase tracking-wide">
            {category}
          </span>
          {date && (
            <span className="text-slate-400 ">
              Published: <time dateTime={date}>{date}</time>
            </span>
          )}
        </div>

        <header className="block md:hidden mb-0 md:mb-8">
          <h1 className=" text-3xl md:text-4xl font-bold mb-10 text-slate-950 leading-tight">
            {title}
          </h1>
        </header>

        {image && (
          <figure className="mb-10 overflow-hidden rounded-2xl    relative ">
            <img
              src={urlFor(image).width(1600).quality(80).url()}
              alt={title}
              className="w-full h-[260px] md:h-[500px] object-cover "
              loading="lazy"
            />
            <div className="hidden md:flex absolute top-0 left-0 w-full h-full bg-linear-to-t from-gray-900/80 to-gray-50/5 flex-col items-start justify-end px-20 pb-20">
              {date && (
                <span className="text-slate-200 text-left mb-4 font-medium">
                  <span className="text-gray-400">Published</span> : <br />
                  {date}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-bold  text-white leading-tight">
                {title}
              </h1>
            </div>
          </figure>
        )}

        <div className="grid gap-x-35 gap-y-10 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
          <article className="space-y-6 text-slate-900 leading-relaxed text-xl">
            {summary && (
              <p className="text-2xl text-center md:text-left font-semibold ">
                {summary}
              </p>
            )}
            {content && content.length > 0 ? (
              <div className="text-xl leading-12 md:leading-10 text-center md:text-left text-gray-900">
                {renderPortableText(content)}
              </div>
            ) : (
              <p>No content available for this news item.</p>
            )}
          </article>
          {news.facts && news.facts.length > 0 && (
            <aside>
              <div className="rounded-2xl bg-slate-900 text-slate-50 p-6 shadow-xl shadow-slate-900/30 ">
                <h3 className="text-sm font-semibold tracking-wide text-sky-300 mb-4 uppercase">
                  Key facts
                </h3>
                <dl className="space-y-3 text-sm">
                  {news.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex justify-between gap-3"
                    >
                      <dt className="text-slate-400">{fact.label}</dt>
                      <dd className="font-medium text-right">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          )}
        </div>
        {/* Related News */}
        {/* <section className="mt-16 border-t border-slate-200 pt-10">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            More from Miami Solar News
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {NEWS.filter((item) => item.id !== news.id)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-100 
                     hover:border-sky-200 hover:shadow-md hover:shadow-sky-50 transition-all h-60 flex flex-col justify-between"
                >
                 
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.tmb_image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-600 mb-2">
                      {item.category}
                    </p>

                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500">{item.date}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default NewsDetails;
