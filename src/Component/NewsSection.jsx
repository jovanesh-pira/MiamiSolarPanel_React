import React, { useState, useEffect } from "react";
import { NEWS } from "../Alldata/newsData.jsx";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { sanityClient, urlFor } from "../lib/sanity";
function News() {
  let SelectedNews = NEWS.slice(0, 4);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "news"] | order(date desc) {
          _id,
          title,
          category,
          date,
          summary,
          tmb_image
        }
      `
      )
      .then((data) => {
        setNews(data.map((item) => ({ ...item, id: item._id })));
        setLoading(false);
      });
  }, []);

  const getImageSrc = (img) => {
    if (!img) return "/images/placeholder.png";
    if (typeof img === "string") return img;
    try {
      return urlFor(img).width(800).quality(80).url();
    } catch (e) {
      return "/images/placeholder.png";
    }
  };

  const display = news && news.length > 0 ? news.slice(0, 4) : SelectedNews;

  return (
    <div className="container mx-auto">
      <div className="mt-40 mb-10 ">
        <h3 className="text-xl flex flex-row items-center gap-x-3 text-gray-700 mb-10">
          <span className="w-20 h-0.5 rounded-2xl bg-gray-600 block"></span>(
          NEWS )
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col gap-y-8">
            <h2 className="text-3xl md:text-4xl text-center md:text-left font-semibold text-gray-800">
              News & Insights
            </h2>
            <p className="text-2xl font-normal   text-gray-400 w-full text-center md:text-left md:w-150 lg:w-200 ">
              Explore the latest developments in solar energy, innovations, and
              company highlights
            </p>
          </div>
          <Button to="./news" size="lg" variant="primary" className="w-50">
            BrowsAll
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-15 px-5 md:px-0">
          {SelectedNews &&
            SelectedNews.map((p, i) => {
              return (
                <div className="News_Card_Holder" key={i}>
                  <div className="flex-1 h-full">
                    <img
                      src={p.tmb_image}
                      alt=""
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="Content_news">
                    <span className="text-xs text-gray-400/70 rounded-md font-semibold mb-2">
                      Technology
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-10 md:mb-4">
                      {p.summary}
                    </p>
                    <Button
                      to={`/news/${p.id}`}
                      size="md"
                      variant="primary_outline"
                      className=" w-40 mt-5"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default News;
