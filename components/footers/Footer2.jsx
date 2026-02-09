import React from "react";
import Link from "next/link";

import LanguageSelect from "../common/LanguageSelect";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer2() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link href={`/`} className="hstack gap-1 text-none">
                        <img
                          alt="Medcol"
                          src="/assets/images/common/android-chrome-192x192.png"
                          width="32"
                          height="32"
                        />
                        <span className="fw-bold fs-5 text-white" style={{ letterSpacing: "-0.5px" }}>Medcol</span>
                      </Link>
                      <p>
                        Medcol helps clinics start every visit prepared by
                        turning patient stories into clear, clinician-ready
                        summaries before the appointment.
                      </p>
                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <ul className="nav-y gap-1 fw-medium">
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
            <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
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
              <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
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
      </div>
    </footer>
  );
}
