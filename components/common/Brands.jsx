"use client";
import { brands } from "@/data/brands";
import Image from "next/image";

export default function Brands() {
  return (
    <div className="hstack justify-center gap-4 lg:gap-8 flex-wrap">
      {brands.map((brand) => (
        <a
          className="brand-item text-center"
          key={brand.id}
          href={brand.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="brand-item-image h-40px image-filter"
            style={{ objectFit: "contain", width: "auto", height: "40px" }}
            src={brand.src}
            width={165}
            height={48}
            alt={brand.alt}
          />
        </a>
      ))}
    </div>
  );
}
