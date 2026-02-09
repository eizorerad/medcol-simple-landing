"use client";

import { closeContactModal } from "@/utlis/toggleContactModal";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ContactModal() {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target) &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        closeContactModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeContactModal();
  }, [pathname]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("leo@medcol.io").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Demo Request from ${formData.firstName} ${formData.lastName} — ${formData.company}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    
    // Try Gmail compose first (works in Chrome), fallback to mailto
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=leo@medcol.io&su=${subject}&body=${body}`;
    const mailtoUrl = `mailto:leo@medcol.io?subject=${subject}&body=${body}`;
    
    // Open Gmail in new tab
    const newWindow = window.open(gmailUrl, '_blank');
    
    // If popup blocked, try mailto
    if (!newWindow || newWindow.closed) {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div
      ref={containerRef}
      id="uc-contact-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
          type="button"
          onClick={closeContactModal}
        >
          <i className="unicon-close" />
        </button>
        <div className="panel vstack gap-2 md:gap-4 text-center">
          <div className="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
              <h4 className="h5 lg:h4 m-0">Schedule your 15-minute demo now</h4>
              <div className="panel w-100 sm:w-350px md:w-500px mx-auto">
                <form onSubmit={handleSubmit} className="vstack gap-2">
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      name="firstName"
                      placeholder="Full name*"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      name="lastName"
                      placeholder="Last name*"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="email"
                      name="email"
                      placeholder="Your email*"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:border-white dark:text-dark"
                      type="tel"
                      name="phone"
                      placeholder="Phone number*"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    className="form-control h-48px w-full bg-white dark:border-white dark:text-dark"
                    type="text"
                    name="company"
                    placeholder="Company name*"
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <textarea
                    className="form-control min-h-150px w-full bg-white dark:border-white dark:text-dark"
                    name="message"
                    placeholder="Your message.."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-primary btn-md text-white mt-2"
                    type="submit"
                  >
                    Schedule my demo
                  </button>
                  <div className="hstack justify-center gap-1 mt-1">
                    <span className="fs-7 opacity-70">Or email us directly:</span>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="btn btn-sm border-0 p-0 fs-7 fw-bold text-primary dark:text-secondary"
                    >
                      {copied ? "✓ Copied!" : "leo@medcol.io"}
                    </button>
                  </div>
                  <p className="fs-7 opacity-70 mt-1 text-center">
                    We'll tailor your demo to your immediate needs and answer
                    all your questions. Get ready to see how it works!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}