import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <section>
      <div className="relative mt-10">
        {/* Top Section */}
        <div className="flex lg:flex-row flex-col flex-wrap gap-5 ms-5 me-5 lg:items-center justify-between">
          {/* Logo & About */}
          <div className="flex flex-col gap-5 flex-wrap">
            <div>
              <img src="" alt="logo" />
              <h1 className="text-lg font-semibold flex gap-1 md:text-3xl">
                Isonge <span className="text-accent">Solutions</span>
              </h1>
            </div>

            <div className="flex lg:flex-row flex-col gap-16">
              {/* About + Contact */}
              <div>
                <div>
                  <h6 className="text-customm text-xl">About Us</h6>
                  <p>
                    We help you reach a large audience at the click of a button
                  </p>
                </div>

                <div className="mt-4">
                  <h6 className="text-customm text-xl pb-3">Contact Us</h6>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-4 items-center">
                      <PhoneCall size={20} className="text-customm" />
                      <a
                        href="tel:+254757876614"
                        className="hover:text-accent transition-colors"
                      >
                        +254 757 876 614
                      </a>
                    </li>
                    <li className="flex gap-4 items-center">
                      <Mail size={20} className="text-customm" />
                      <a
                        href="mailto:info@isonge.co.ke"
                        className="hover:text-accent transition-colors"
                      >
                        info@isonge.co.ke
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Information Links */}
              <div className="flex justify-between gap-16">
                <div className="flex flex-col gap-2">
                  <h6 className="text-customm text-xl">Information</h6>
                  <ul className="flex flex-col gap-2">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Testimonials</li>
                    <li>FAQs</li>
                    <li>Events</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-customm pb-3">Helpful Links</h6>
                  <ul className="flex flex-col gap-2">
                    <li>Services</li>
                    <li>Supports</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex flex-col gap-3">
                <h6 className="text-lg mb-4">Subscribe To Our Newsletter</h6>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="md:py-3 sm:py-2 h-[40px] px-2 rounded border"
                />
                <button className="float-left bg-slate px-3 py-1 rounded mt-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mb-5">
          <hr className="ms-5 me-5 mt-3 mb-5" />
          <div className="flex items-center justify-center">
            <ul className="flex gap-3">
              <li className="bg-customm rounded-full p-1">
                <Facebook size={20} />
              </li>
              <li className="bg-customm rounded-full p-1">
                <Twitter size={20} />
              </li>
              <li className="bg-customm rounded-full p-1">
                <Instagram size={20} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
