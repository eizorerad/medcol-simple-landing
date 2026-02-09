import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks2, socialLinks } from "@/data/footer";

export default function Footer3() {
  return (
    <footer
      id="uc-footer"
      className="uc-footer panel py-4 lg:py-6 xl:py-9 overflow-hidden"
    >
      <div className="container max-w-xl">
        <div
          className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8"
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
        >
          <div className="uc-footer-top panel p-4 lg:p-6 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800">
            <div className="vstack lg:hstack gap-4 justify-between section-heading-2">
              <div>
                <div className="uc-logo">
                  <Link
                    className="panel text-none hstack gap-1"
                    href={`/`}
                  >
                    <Image
                      alt="Medcol"
                      src="/assets/images/common/android-chrome-192x192.png"
                      width="32"
                      height="32"
                    />
                    <span className="fw-bold fs-5" style={{ letterSpacing: "-0.5px" }}>Medcol</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="uc-footer-nav panel">
            <div className="row child-cols-6 sm:child-cols col-match g-4">
              {footerLinks2.map((section, index) => (
                <div
                  key={index}
                  className={
                    section.header === "Other" ? "d-none lg:d-block" : ""
                  }
                >
                  <ul className="nav-y gap-1 fw-medium">
                    <li className="uc-nav-header opacity-60 lg:mb-2">
                      {section.header}
                    </li>
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="uc-footer-bottom panel vstack gap-4 pt-4 lg:pt-6 border-top dark:text-white">
            <div className="vstack sm:hstack justify-center items-center gap-1 lg:gap-2">
              <p className="opacity-60">
                Medcol © {new Date().getFullYear()}, All rights reserved.
              </p>
              <ul className="nav-x gap-2 fw-medium">
                <li>
                  <Link href="/page-privacy">Privacy notice</Link>
                </li>
                <li>
                  <Link href="/page-terms">Legal</Link>
                </li>
              </ul>
            </div>
            <div className="hstack justify-center gap-2 lg:gap-3">
              <ul className="nav-x gap-2">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>
                      <i className={`icon icon-2 ${link.iconClass}`} />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="vr" />
              <LanguageSelect />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
