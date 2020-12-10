import React from "react";
import { Link } from "react-router-dom";

function DonationSucess() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Hero content */}
      <div className="pt-24 pb-12 md:pt-24 md:pb-20">
        {/* Section header */}
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            You're a local{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              hero.
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Thank you so much for your generous donation. We'll be sending you
              a personal thank-you note.{" "}
              <b>Your donation has helped paint the mural below.</b> Improving
              and spreading our heritage throughout the Yarraville local
              community.
            </p>
            <div data-aos="zoom-y-out" data-aos-delay="150">
              <img
                className="rounded-lg "
                src={require("../images/mural_transition.png")}
                alt="Mural Transition"
              />
            </div>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-8"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <Link
                  className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  to="/"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationSucess;
