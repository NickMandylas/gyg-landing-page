import React from "react";
import Donation from "../components/Donation";

function Donations() {
  return (
    <section className="relative" id="donations-section">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">How can I help out?</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              There are <span className="font-bold italic">two</span> amazing
              ways that you can help us out & effect change immediately!
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-6" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 ">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img
                    className="relative rounded-full"
                    src={require("../images/number_1.png")}
                    width="96"
                    height="96"
                    alt="Testimonial 01"
                  />
                </div>
                <h4 className="h4 mb-5">Donating Money</h4>
                <blockquote className="text-lg font-small mb-4">
                  We're a non-for-profit so all our income is received by
                  donations. Painting the mural costs a lot of money! From
                  paying our talented artist, to insurance & permits, the costs
                  all add up!
                </blockquote>
                <div className="mt-8">
                  <Donation />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 ">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img
                    className="relative rounded-full"
                    src={require("../images/number_2.png")}
                    width="96"
                    height="96"
                    alt="Testimonial 01"
                  />
                </div>
                <h4 className="h4 mb-5">Donating Stories</h4>
                <blockquote className="text-lg font-small mb-4">
                  We're wanting to collect as many Greek stories as possible.
                  Any memorable moments from whether it's your own or your
                  grandparent's, please send through & grow our digital archive.
                </blockquote>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto p-4"
                    href="mailto:hello@gyg.org.au"
                  >
                    Send us your story!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donations;
