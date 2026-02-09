"use client";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

function FloatingImage({ block }) {
  const isEnd = block.float === "end";
  const wrapperClass = isEnd ? "float-end ms-3 mb-1" : "float-start me-3 mb-0";

  return (
    <figure className={wrapperClass}>
      <Item
        original={block.src}
        thumbnail={block.src}
        width={block.width}
        height={block.height}
      >
        {({ ref, open }) => (
          <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
            <Image
              className="media-cover image uc-transition-scale-up uc-transition-opaque"
              alt={block.alt}
              src={block.src}
              width={block.width}
              height={block.height}
              ref={ref}
            />
            <a
              onClick={open}
              className="position-cover"
              data-caption={block.caption}
            />
          </figure>
        )}
      </Item>
      <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
        {block.caption}
      </figcaption>
    </figure>
  );
}

function FullWidthImage({ block }) {
  return (
    <figure className="my-3 sm:my-4">
      <Item
        original={block.src}
        thumbnail={block.src}
        width={block.width}
        height={block.height}
      >
        {({ ref, open }) => (
          <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
            <Image
              className="media-cover image uc-transition-scale-up uc-transition-opaque"
              alt={block.alt}
              src={block.src}
              width={block.width}
              height={block.height}
              ref={ref}
            />
            <a
              onClick={open}
              className="position-cover"
              data-caption={block.caption}
            />
          </figure>
        )}
      </Item>
      <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
        {block.caption}
      </figcaption>
    </figure>
  );
}

function renderBlock(block, index) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className={index > 0 ? "mt-3" : undefined}>
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h4 key={index} className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
          {block.text}
        </h4>
      );

    case "image":
      return <FullWidthImage key={index} block={block} />;

    case "floatingImage":
      return (
        <div key={index} className={`panel ${index > 0 ? "mt-3" : ""}`}>
          <FloatingImage block={block} />
          {block.paragraphs.map((text, i) => (
            <p key={i} className={i > 0 ? "mt-3" : undefined}>
              {text}
            </p>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function BlogContentRenderer({ content }) {
  if (!content) return null;

  return (
    <Gallery>
      <div
        className="post-content panel fs-6 md:fs-5"
        data-uc-lightbox="animation: scale"
      >
        {content.blocks.map(renderBlock)}
      </div>
    </Gallery>
  );
}

export function ContentTags({ content }) {
  if (!content || !content.tags) return null;

  return (
    <ul className="nav-x gap-narrow text-primary">
      <li>
        <span className="text-black dark:text-white me-narrow">Tags:</span>
      </li>
      {content.tags.map((tag, i) => (
        <li key={tag}>
          <a href="#" className="gap-0">
            {tag}
            {i < content.tags.length - 1 && (
              <span className="text-black dark:text-white">,</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
