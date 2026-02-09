"use client";
import Image from "next/image";
import Link from "next/link";
import { allBlogs } from "@/data/blogs";

function getBlogImage(blog) {
  return (
    blog.image ||
    blog.imgSrc ||
    blog.imageSrc ||
    "/assets/images/blog/post-4.jpg"
  );
}

const navigableBlogs = allBlogs.reduce((acc, blog) => {
  if (!blog.title) return acc;
  const titleLower = blog.title.toLowerCase();
  const alreadyExists = acc.some(
    (b) => b.title.toLowerCase() === titleLower
  );
  if (!alreadyExists) {
    return [...acc, blog];
  }
  return acc;
}, []);

function getAdjacentBlogs(currentId) {
  const index = navigableBlogs.findIndex((b) => b.id === currentId);
  const effectiveIndex = index === -1 ? 0 : index;

  const prevIndex =
    effectiveIndex > 0 ? effectiveIndex - 1 : navigableBlogs.length - 1;
  const nextIndex =
    effectiveIndex < navigableBlogs.length - 1 ? effectiveIndex + 1 : 0;

  return {
    prev: navigableBlogs[prevIndex],
    next: navigableBlogs[nextIndex],
  };
}

export default function PostNavigation({ blogItem, basePath = "/blog-details" }) {
  const { prev, next } = getAdjacentBlogs(blogItem.id);
  const prevImage = getBlogImage(prev);
  const nextImage = getBlogImage(next);

  return (
    <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9 fdr-min-600">
      <div className="new-post panel hstack w-100 sm:w-1/2">
        <div className="panel hstack justify-center w-100px h-100px">
          <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
            <Image
              className="media-cover image uc-transition-scale-up uc-transition-opaque"
              alt={prev.title}
              src={prevImage}
              width="1280"
              height="853"
            />
            <Link
              href={`${basePath}/${prev.id}`}
              className="position-cover"
              data-caption={prev.title}
            />
          </figure>
        </div>
        <div className="panel vstack justify-center px-2 gap-1 w-1/3">
          <span className="fs-7 opacity-60">Prev Article</span>
          <h6 className="h6 lg:h5 m-0">{prev.title}</h6>
        </div>
        <Link href={`${basePath}/${prev.id}`} className="position-cover" />
      </div>
      <div className="new-post panel hstack w-100 sm:w-1/2">
        <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
          <span className="fs-7 opacity-60">Next Article</span>
          <h6 className="h6 lg:h5 m-0">{next.title}</h6>
        </div>
        <div className="panel hstack justify-center w-100px h-100px">
          <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
            <Image
              className="media-cover image uc-transition-scale-up uc-transition-opaque"
              alt={next.title}
              src={nextImage}
              width="1280"
              height="853"
            />
            <Link
              href={`${basePath}/${next.id}`}
              className="position-cover"
              data-caption={next.title}
            />
          </figure>
        </div>
        <Link href={`${basePath}/${next.id}`} className="position-cover" />
      </div>
    </div>
  );
}
