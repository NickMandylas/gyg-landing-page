import React, { useState } from "react";
import toQueryString from "to-querystring";
import jsonp from "jsonp";
import { Sparkles } from "heroicons-react";

const getAjaxUrl = (url) => url.replace("/post?", "/post-json?");

function Newsletter() {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [response, setResponse] = useState(null);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-blue-800 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <img
                src={require("../images/greek-statue.png")}
                width="500"
                height="462"
                alt="Element"
              />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Get notified about GYG</h3>
                <p className="text-gray-300 text-lg mb-6">
                  We have a lot more lined up than just this! Sign up to our
                  newlestter to get notified about all our upcoming initiatives.
                </p>

                {/* CTA form */}
                <form
                  className="w-full lg:w-auto"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (email) {
                      setLoading(true);
                      const url =
                        "https://gyg.us7.list-manage.com/subscribe/post?u=561925964181f5e2bea0e0b7d&amp;id=b5ac3bb36b";

                      const queryString = toQueryString({
                        EMAIL: email,
                      });

                      const post_url = getAjaxUrl(url) + "&" + queryString;

                      jsonp(post_url, { param: "c" }, (err, data) => {
                        if (err) {
                          setResponse(err);
                        } else if (data.result !== "success") {
                          setResponse("You've already subscribed!");
                        } else {
                          setResponse("Thanks for subscribing!");
                        }
                        setSubscribed(true);
                      });
                    }
                    setLoading(false);
                  }}
                >
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input
                      type="email"
                      className="w-full appearance-none bg-white border border-gray-300 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
                      placeholder="Your email…"
                      aria-label="Your email…"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      type="submit"
                    >
                      {loading ? (
                        <Sparkles className="animate-spin" />
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </div>
                  {/* Success message */}
                  {subscribed ? (
                    <p className="text-sm text-green-400 mt-3">{response}</p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
