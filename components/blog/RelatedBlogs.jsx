import { blogPosts2 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RelatedBlogs() {
  return (
    <>
      {blogPosts2.map((elm, i) => (
        <div key={i}>
          <article className="post type-post panel vstack gap-2">
            <figure className="featured-image m-0 rounded ratio ratio-4x3 uc-transition-toggle overflow-hidden">
              <Image
                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                src={elm.imageSrc}
                width={1280}
                height={853}
                alt={elm.altText}
              />
              <Link
                href={`/blog-details/${elm.id}`}
                className="position-cover"
                data-caption={elm.altText}
              ></Link>
            </figure>
            <header className="panel vstack gap-1">
              <h5 className="h6 sm:h5 md:h4 m-0">
                <Link className="text-none" href={`/blog-details/${elm.id}`}>
                  {elm.title}
                </Link>
              </h5>
              <div className="post-date hstack gap-narrow fs-7 opacity-60">
                <span>{elm.date}</span>
              </div>
            </header>
          </article>
        </div>
      ))}
    </>
  );
}
