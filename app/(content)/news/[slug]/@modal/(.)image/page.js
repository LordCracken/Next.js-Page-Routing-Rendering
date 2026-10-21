'use client';

import {use, Suspense} from "react";
import {notFound, useRouter} from "next/navigation";

import {DUMMY_NEWS} from "@/dummy-news";

function Image({params}) {
  const newsItemSlug = use(params).slug;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
  );
}

export default function InterceptedImagePage({params}) {
  const router = useRouter();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Suspense fallback={<p>Loading image...</p>}>
            <Image params={params} />
          </Suspense>
        </div>
      </dialog>
    </>
  );
}
