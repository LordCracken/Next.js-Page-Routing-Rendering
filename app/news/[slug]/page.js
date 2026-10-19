import {notFound} from "next/navigation";

import {DUMMY_NEWS} from "@/dummy-news";
import {Suspense} from "react";

async function NewsDetailContent({params}) {
  const {slug} = await params;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </>
  );
}

export default function NewsDetailPage({params}) {
  return (
      <article className="news-article">
        <Suspense fallback={<p>Loading this news article content...</p>}>
          <NewsDetailContent params={params} />
        </Suspense>
      </article>
  );
}
