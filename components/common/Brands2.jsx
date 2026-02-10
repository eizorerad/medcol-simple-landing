import { brands } from "@/data/brands";
import Image from "next/image";

export default function Brands2() {
  return (
    <div className="d-flex flex-wrap justify-center items-center gap-4 lg:gap-6 xl:gap-8">
      {brands.map((brand) => (
        <a
          key={brand.id}
          href={brand.href}
          target="_blank"
          rel="noopener noreferrer"
          className="brand-item text-center"
        >
          <Image
            className="brand-item-image image-filter"
            src={brand.src}
            width={165}
            height={48}
            alt={brand.alt}
            style={{ objectFit: "contain", width: "auto", height: "40px" }}
          />
        </a>
      ))}
    </div>
  );
}