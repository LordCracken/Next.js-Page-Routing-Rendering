import {Suspense} from "react";
import {notFound} from "next/navigation";

import {DUMMY_NEWS} from "@/dummy-news";

async function Image({params}) {
  const newsItemSlug = (await params).slug;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
  );
}

export default function ImagePage({params}) {
  return (
    <div className="fullscreen-image">
      <Suspense fallback={<p>Loading image...</p>}>
        <Image params={params} />
      </Suspense>
    </div>
  );
}
