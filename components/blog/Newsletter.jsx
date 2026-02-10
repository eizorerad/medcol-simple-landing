"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: email,
          listIds: [2],
          updateEnabled: true,
        }),
      });

      if (res.ok || res.status === 204) {
        setStatus("success");
        setMessage("Thank you! You've been subscribed.");
        setEmail("");
      } else {
        const data = await res.json();
        if (data.message?.includes("already exist")) {
          setStatus("success");
          setMessage("You're already subscribed!");
          setEmail("");
        } else {
          setStatus("error");
          setMessage("Something went wrong. Please try again.");
        }
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  };

  return (
    <div
      id="blog_newsletter"
      className="blog-newsletter section panel overflow-hidden"
    >
      <div className="section-outer panel pb-4 lg:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel p-3 py-6 lg:p-6 xl:p-8 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
            <div className="vstack gap-2 max-w-600px mx-auto text-center">
              <h2 className="h4 md:h3 lg:h2 m-0">Get the latest updates</h2>
              <p className="fs-6 lg:fs-5">
                Subscribe to get the latest insights on healthcare AI,
                pre-visit preparation, and clinical workflow optimization.
              </p>
              {status === "success" ? (
                <div className="p-3 rounded bg-primary bg-opacity-10 text-primary fw-medium fs-6">
                  ✓ {message}
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="row child-cols g-1 mt-1 xl:mt-2 justify-center"
                >
                  <div className="col-12 sm:col-auto" style={{ maxWidth: 400 }}>
                    <input
                      className="form-control h-48px xl:h-56px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      type="email"
                      placeholder="Your email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="col-12 sm:col-auto">
                    <button
                      className="btn btn-md h-48px xl:h-56px w-100 lg:min-w-150px xl:min-w-200px btn-primary text-white"
                      type="submit"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                  {status === "error" && (
                    <div className="col-12 mt-1 text-danger fs-7">{message}</div>
                  )}
                </form>
              )}
              <p className="fs-7 text-dark dark:text-white text-opacity-70">
                Don't worry we don't spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}