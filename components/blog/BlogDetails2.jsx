"use client";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import BlogContentRenderer, { ContentTags } from "./BlogContentRenderer";
import PostNavigation from "./PostNavigation";
import { getContentByTitle } from "@/data/blogContent";

export default function BlogDetails2({ blogItem }) {
  const content = getContentByTitle(blogItem.title);
  return (
    <article className="post type-post single-post pb-4 lg:pb-6 xl:pb-9">
      <div className="container-full">
        <figure className="featured-image m-0">
          <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded-0 uc-transition-toggle overflow-hidden">
            <Image
              className="media-cover image uc-transition-scale-up uc-transition-opaque"
              alt={content?.heroImage?.alt || blogItem.title}
              src={content?.heroImage?.src || "/assets/images/blog/post-full.jpg"}
              width="1280"
              height="853"
            />
          </figure>
        </figure>
        <div className="post-content-wrap panel">
          <aside
            className="post-share-float d-none lg:d-block"
            data-uc-sticky="bottom: .post-author;"
          >
            <div className="vstack justify-center items-center gap-2 position-absolute top-0 end-0 m-4 xl:m-9">
              <span className="ft-secondary">Share</span>
              <ul className="social-icons nav-y justify-center gap-2 text-gray-900 dark:text-white">
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://dribbble.com/unistudioinc"
                  >
                    <i className="unicon-logo-x-filled icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110 text-white bg-primary border-primary"
                    href="https://ui8.net/users/unistudio"
                  >
                    <i className="unicon-logo-linkedin icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://themeforest.net/user/unistudioco"
                  >
                    <i className="unicon-logo-facebook icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://unistudio.co/unicore/"
                  >
                    <i className="unicon-logo-pinterest icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://unistudio.co/unicore/"
                  >
                    <i className="unicon-email icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://unistudio.co/unicore/"
                  >
                    <i className="unicon-link icon-1 xl:icon-2" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <div className="container max-w-900px">
            <div className="post-header mt-4 lg:mt-6 xl:mt-8">
              <div className="panel vstack items-center gap-2 md:gap-3 text-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto">
                <h1 className="h4 sm:h3 xl:h1 m-0">{blogItem.title}</h1>
              </div>
            </div>
            <hr className="w-100 my-4 lg:my-6 xl:my-8 opacity-100 border-gray-100 dark:border-gray-700" />
            <BlogContentRenderer content={content} />
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ContentTags content={content} />
              <ul className="post-share-icons nav-x gap-narrow">
                <li className="me-1">
                  <span className="text-black dark:text-white">Share:</span>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-facebook icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-x-filled icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-email icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-link icon-1" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Amir Nisi"
                      src="/assets/images/blog/post-author.jpg"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">Amir Nisi</h4>
                    <p className="fs-6">
                      Creative and experienced content writer with 6+ years of
                      experience eager to create unique content strategy for
                      Medcol to transform clinic workflows.
                    </p>
                    <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                      <li>
                        <a href="#medium">
                          <i className="icon-2 unicon-logo-medium" />
                        </a>
                      </li>
                      <li>
                        <a href="#x">
                          <i className="icon-2 unicon-logo-x-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#instagram">
                          <i className="icon-2 unicon-logo-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <PostNavigation blogItem={blogItem} basePath="/blog-details-2" />
            <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
              <h4 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h4>
              <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                <RelatedBlogs />
              </div>
            </div>
            <a
              href="#commont"
              className="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white border border-gray-200 dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span>Be the first to write a comment.</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
