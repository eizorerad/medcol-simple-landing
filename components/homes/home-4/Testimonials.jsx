import Image from "next/image";

export default function Testimonials() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel pt-4 md:pt-6 xl:pt-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="row child-cols-12 justify-center col-match g-2 lg:g-3"
                data-uc-grid=""
              >
                <div>
                  <div className="panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
                    <div
                      className="row child-cols-12 col-match g-0"
                      data-uc-grid=""
                    >
                      <div className="sm:col-6 lg:col-8">
                        <div className="panel vstack justify-between gap-3 px-3 py-4 lg:px-5 lg:py-6">
                          <div className="panel vstack items-start gap-2">
                            <div className="panel">
                              <div className="hstack h-48px">
                                <Image
                                  className="h-40px"
                                  style={{ objectFit: "contain", width: "auto", height: "40px" }}
                                  alt="Checkdoc"
                                  src="/assets/images/brands/checkdoc.png"
                                  width="251"
                                  height="55"
                                />
                              </div>
                            </div>
                            <p className="fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark dark:text-white">
                              "We integrated Medcol's AI into our diagnostic
                              workflow and the results were immediate — patients
                              come prepared, clinicians save 15 minutes per visit,
                              and our service quality went up across the board.
                              For a fast-growing health-tech like CheckDoc, this
                              is a game-changer."
                            </p>
                          </div>
                          <div className="panel mt-2 lg:mt-4">
                            <div className="panel vstack items-start gap-0 lg:gap-1">
                              <h6 className="h6 lg:h5 m-0">Tota Smatova</h6>
                              <span className="fs-7 lg:h6 opacity-70">
                                Founder & CEO, CheckDoc
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-6 lg:col-4">
                        <div className="panel overflow-hidden h-100">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 h-100 uc-transition-toggle overflow-hidden">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              alt="Tota Smatova, Founder of CheckDoc"
                              src="/assets/images/portrait/totasmatova.jpeg"
                              width="1000"
                              height="1000"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
