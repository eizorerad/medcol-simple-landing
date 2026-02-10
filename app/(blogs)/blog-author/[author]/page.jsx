import Header2 from "@/components/headers/Header2";

import Footer3 from "@/components/footers/Footer3";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs4 from "@/components/blog/Blogs4";
import { allBlogs } from "@/data/blogs";

export function generateStaticParams() {
  const authors = [...new Set(allBlogs.map((b) => b.authorName || b.author).filter(Boolean))];
  return authors.map((author) => ({ author }));
}

export const metadata = {
  title:
    "Blog Author || Medcol - AI-Powered Pre-Visit Preparation",
  description:
    "Medcol - AI-Powered Pre-Visit Preparation",
};
export default async function BlogAuthorPage(props) {
  const params = await props.params;
  const author = params.author.split("%20").join(" ");
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BreadCumb category={author} />
          <Blogs4 author={author} />
          <Newsletter />
        </div>
        <Footer3 />
      </div>
    </>
  );
}
