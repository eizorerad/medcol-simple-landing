"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function BlogDetails1({ blogItem }) {
  return (
    <>
      <div
        style={{ marginTop: "80px" }}
        className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
      >
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li>
              <Image
                alt="icon"
                className="me-1"
                src="/assets/images/common/icons/home.svg"
                width="18"
                height="18"
              />
            </li>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog`}>Blog</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog-category/AI Healthcare`}>AI Healthcare</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">{blogItem.title}</span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                  {blogItem.title}
                </h1>
                <ul className="post-share-icons nav-x gap-1 dark:text-white">
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-pinterest icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-link icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="AI-Powered Clinical Reasoning"
                    src="/assets/images/blog/post-full.jpg"
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                <p>
                  The healthcare industry is undergoing a profound transformation 
                  driven by artificial intelligence. At Medcol, we're at the forefront 
                  of this revolution, developing AI-powered clinical reasoning systems 
                  that support doctors in making better decisions, not just faster ones. 
                  Our approach is fundamentally different from generic AI chatbots—we've 
                  built a multi-agent system that mirrors how real medical teams think 
                  and collaborate.
                </p>
                <p className="mt-3">
                  The single most inefficient step in healthcare isn't during the patient 
                  visit; it's the cognitive scramble doctors face before it starts. 
                  Clinicians waste critical minutes per encounter piecing together 
                  fragmented data "cold," leading to rushed initial judgments and 
                  diagnostic pathways seeded with inefficiency from the outset.
                </p>
                <div className="panel mt-3">
                  <figure className="float-end ms-3 mb-1">
                    <Item
                      original="/assets/images/blog/post-1.jpg"
                      thumbnail="/assets/images/blog/post-1.jpg"
                      width="1280"
                      height="853"
                    >
                      {({ ref, open }) => (
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Clinical AI Decision Support"
                            src="/assets/images/blog/post-1.jpg"
                            width="1280"
                            height="853"
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption="Clinical AI Decision Support"
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      Clinical AI Decision Support
                    </figcaption>
                  </figure>
                  <p>
                    Medcol solves this problem by automating pre-visit data collection 
                    and supporting doctors with structured AI-driven reasoning. Our 
                    system prepares the case like a medical intern, thinks through it 
                    like a panel of specialists, and hands the doctor clarity, not chaos.
                  </p>
                  <p className="mt-3">
                    Unlike ChatGPT which provides general answers, Medcol offers 
                    structured, agent-based reasoning tied to medical logic and 
                    guidelines. Instead of "text completion," Medcol simulates 
                    clinical thought, includes audit trails, and integrates with 
                    medical records, ensuring safety, clarity, and trust.
                  </p>
                  <p className="mt-3">
                    Our proprietary ConSilico system uses a multi-agent architecture 
                    where each AI agent simulates the perspective of a specialist 
                    (e.g., cardiologist, neurologist). They collaboratively reason 
                    through complex cases using a shared structured knowledge base 
                    called MedGraph, which allows contextual and traceable decision-making.
                  </p>
                </div>
                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">The ConSilico Advantage</h4>
                <p>
                  At the core of Medcol is ConSilico—a multi-agent AI system that 
                  mirrors the way real doctors think in teams. Each agent represents 
                  a medical specialty (like cardiology or neurology) and contributes 
                  its perspective to simulate a clinical concilium. This layered 
                  reasoning allows for nuanced, safe, and explainable decision support.
                </p>
                <p className="mt-3">
                  To support meaningful reasoning, agents operate on MedGraph—a 
                  structured, dynamic knowledge graph built from trusted clinical 
                  sources, guidelines, and real-world patterns. Unlike traditional 
                  LLMs, MedGraph ensures traceability, logical flow, and consistent 
                  clinical context in every output.
                </p>
                <figure className="my-3 sm:my-4">
                  <Item
                    original="/assets/images/blog/post-2.jpg"
                    thumbnail="/assets/images/blog/post-2.jpg"
                    width="1280"
                    height="853"
                  >
                    {({ ref, open }) => (
                      <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                        <Image
                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                          alt="Multi-Agent Clinical Reasoning"
                          src="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                          ref={ref}
                        />
                        <a
                          onClick={open}
                          className="position-cover"
                          data-caption="Multi-Agent Clinical Reasoning"
                        ></a>
                      </figure>
                    )}
                  </Item>
                  <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                    Multi-Agent Clinical Reasoning
                  </figcaption>
                </figure>
                <p>
                  Medcol leverages fine-tuned language models optimized for healthcare 
                  dialogue, with inference pipelines engineered for low latency and 
                  high accuracy. The platform is modular, cloud-ready, and compatible 
                  with standards like FHIR and HL7, enabling smooth integration with 
                  hospital and telemedicine systems.
                </p>
                <p className="mt-3">
                  We prioritize security, privacy, and regulatory compliance from 
                  the ground up. Medcol adheres to HIPAA and GDPR standards, employs 
                  data anonymization techniques, and supports secure, auditable 
                  interactions between patient data and AI.
                </p>
                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                  Real-World Traction and Adoption
                </h4>
                <p>
                  Medcol is already embedded into Kazakhstan's national eGov healthcare 
                  portal, powering AI-assisted patient intake and triage for millions 
                  of citizens. We've also integrated with private health innovators 
                  like CheckDoc and ValeoHealth, proving our ability to work across 
                  both public and private ecosystems.
                </p>
                <p className="mt-3">
                  Live pilots have demonstrated operational feasibility and scalability. 
                  Initial deployments have processed thousands of real patient 
                  interactions, providing valuable feedback loops for refinement 
                  and validation. More than 300 medical professionals have tested 
                  and provided feedback on Medcol, helping shape its evolution to 
                  meet real-world clinical needs.
                </p>
                <div className="panel my-3">
                  <figure className="float-start me-3 mb-0">
                    <Item
                      original="/assets/images/blog/post-3.jpg"
                      thumbnail="/assets/images/blog/post-3.jpg"
                      width="1280"
                      height="853"
                    >
                      {({ ref, open }) => (
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Healthcare AI Integration"
                            src="/assets/images/blog/post-3.jpg"
                            width="1280"
                            height="854"
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption="Healthcare AI Integration"
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      Healthcare AI Integration
                    </figcaption>
                  </figure>
                  <p>
                    The global AI in healthcare market is expanding at a CAGR of 
                    over 40%, expected to reach $188 billion by 2030. Clinical 
                    decision support, triage automation, and virtual care are 
                    among the fastest-growing verticals.
                  </p>
                  <p>
                    Healthcare systems globally are facing clinician shortages, 
                    rising costs, and increasing demand for personalized care. 
                    Medcol is positioned at the intersection of telemedicine, 
                    remote diagnostics, and AI-augmented clinical workflows—
                    delivering value where the need is most acute.
                  </p>
                  <p>
                    Strategic partnerships are in development across GCC countries, 
                    Africa, and Southeast Asia, where digital transformation is 
                    accelerating and the need for intelligent clinical infrastructure 
                    is immediate.
                  </p>
                </div>
                <p>
                  Medcol operates as a B2B SaaS platform through API subscriptions 
                  and enterprise licensing. Telemedicine platforms, insurance 
                  companies, and health systems pay for access to our AI decision 
                  support engine.
                </p>
                <p className="mt-3">
                  For large clients like government portals or hospital networks, 
                  we offer white-label integrations, custom workflows, and clinical 
                  consulting to support change management and internal adoption.
                </p>
              </div>
            </Gallery>
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ul className="nav-x gap-narrow text-primary">
                <li>
                  <span className="text-black dark:text-white me-narrow">
                    Tags:
                  </span>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Healthcare AI
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Clinical Decision Support
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Telemedicine <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Multi-Agent AI
                  </a>
                </li>
              </ul>
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
                      alt="Medcol Team"
                      src="/assets/images/blog/post-author.jpg"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">Medcol Team</h4>
                    <p className="fs-6">
                      The Medcol team combines clinical AI expertise with 
                      enterprise-scale engineering experience. Led by founder 
                      Leonid Klarov, a former radiologist and AI diagnostics 
                      pioneer, we're building the future of clinical decision support.
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
            <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9 fdr-min-600">
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Pre-Visit Automation in Healthcare"
                      src="/assets/images/blog/img-02.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/18`}
                      className="position-cover"
                      data-caption="Pre-Visit Automation in Healthcare"
                    ></Link>
                  </figure>
                </div>
                <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                  <span className="fs-7 opacity-60">Prev Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    Pre-Visit Automation: Solving the Cognitive Scramble
                  </h6>
                </div>
                <Link
                  href={`/blog-details/18`}
                  className="position-cover"
                ></Link>
              </div>
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                  <span className="fs-7 opacity-60">Next Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    HIPAA & GDPR Compliance in Healthcare AI
                  </h6>
                </div>
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="HIPAA & GDPR Compliance"
                      src="/assets/images/blog/img-03.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/19`}
                      className="position-cover"
                      data-caption="HIPAA & GDPR Compliance"
                    ></Link>
                  </figure>
                </div>
                <Link
                  href={`/blog-details/19`}
                  className="position-cover"
                ></Link>
              </div>
            </div>
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
      </article>
    </>
  );
}
