import Header2 from "@/components/headers/Header2";

import Footer3 from "@/components/footers/Footer3";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs7 from "@/components/blog/Blogs7";
export const metadata = {
  title:
    "Blog 2 Col || Medcol - AI-Powered Pre-Visit Preparation",
  description:
    "Medcol - AI-Powered Pre-Visit Preparation",
};
export default function Blog2ColsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BreadCumb />
          <Blogs7 />
          <Newsletter />
        </div>
        <Footer3 />
      </div>
    </>
  );
}
