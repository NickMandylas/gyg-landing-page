import React from "react";

function Features() {
  return (
    <section className="relative" id="info-section">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Hidden Hellenism: Yarraville Edition</h1>
            <p className="text-xl text-gray-600">
              In collaboration with Maribyrnong City Council we’re bringing an
              interactive Greek inspired mural to Yarraville West.
            </p>
          </div>

          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div className="divide-y divide-gray-200">
                  <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <h3 className="h3 mb-3">The Proposal</h3>
                    <p>
                      Since COVID we’ve been thinking of ways to kickstart
                      community engagement and restore local connection. At the
                      Greek Youth Generator, a non-for profit organisation
                      helping young people experiment with their cultural
                      identities, we’re doing so through art!
                    </p>
                    <p>
                      In collaboration with Maribyrnong City Council we’re
                      bringing an interactive Greek inspired mural to Yarraville
                      West. The wall pays homage to the local Greek influence
                      and symbols through the generations, represented in a
                      modern artistic fashion!
                    </p>
                    <p>
                      Behind the mural, we’re also building a digital archive of
                      local history, interviewing elderly, collecting photos and
                      reinterpreting memorabilia of Yarraville’s Greek past! We
                      think its important to draw attention through the mural
                      and then funnel the excitement down into the more complex
                      stories of the Greek community’s history.
                    </p>
                    <p className="pb-6">
                      Get your <b>Greek</b> on and help us lift this project!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
