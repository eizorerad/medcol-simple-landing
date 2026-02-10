import BlogDetails3 from "@/components/blog/BlogDetails3";
import Newsletter from "@/components/blog/Newsletter";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title:
    "Blog Details 3 || Medcol - AI-Powered Pre-Visit Preparation",
  description:
    "Medcol - AI-Powered Pre-Visit Preparation",
};
export default async function BlogDetailsPage3(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <BlogDetails3 blogItem={blogItem} />
          <Newsletter />
        </div>
        <Footer3 />
      </div>
    </>
  );
}
