"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const SignupForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-300 rounded-md shadow-md z-40">
      <div className="flex justify-between items-center mt-8 mb-4">
        <p className="text-gray-600">
          WeddingPro provides vendors with advertising solutions ans resources
          designed to make running wedding businesses easier.
        </p>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <IoMdClose />
        </button>
      </div>
      <div
        className="modal-content"
        style={{ maxHeight: "80vh", overflowY: "auto" }}
      >
        <div className="box">
          <p className="text-gray-600 mb-4">
            Fill out the form below to get in touch with us.
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* First row */}
            <div>
              <div className="flex flex-col ">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name *"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-300"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name *"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            {/* Second row */}
            <div>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company *"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col ">
                <select
                  id="business_category"
                  name="business_category"
                  placeholder="Business Category *"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  required
                >
                  <option value="">Business Category *</option>
                  <option value="ta">Travel Agent</option>
                  <option value="wb">Wedding Bands</option>
                  <option value="wc">Wedding Cakes</option>
                  <option value="wd">Wedding Dresses</option>
                  <option value="wh">Wedding Hair & Makeup</option>
                  <option value="wp">Wedding Photography</option>
                  <option value="wpl">Wedding Planners</option>
                  <option value="bs">Bar Services & Beverages</option>
                  <option value="c">Caterers</option>
                  <option value="dl">Dance Lessons</option>
                  <option value="dl2">Dance & Lighting</option>
                  <option value="dj">DJs</option>
                  <option value="mu">Musicians</option>
                  <option value="fa">Favors</option>
                  <option value="fl">Florists</option>
                  <option value="in">Invitations</option>
                  <option value="je">Jewelers</option>
                  <option value="of">Officiants</option>
                  <option value="pb">Photo Booths</option>
                  <option value="ve">Venue</option>
                  <option value="rd">Rehearsal Dinner </option>
                  <option value="re">Rentals</option>
                  <option value="li">Limos</option>
                  <option value="vi">Videographers</option>
                </select>
              </div>
            </div>
            {/* Third row */}
            <div>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone *"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col ">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            {/* Fourth row */}
            <div>
              <div className="flex flex-col ">
                <select
                  id="country"
                  name="country"
                  placeholder="Country *"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  required
                >
                  <option value="">Country *</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="as">American Samoa</option>
                  <option value="an">Anguilla</option>
                  <option value="ab">Antigua + Barbuda</option>
                  <option value="ar">Aruba</option>
                  <option value="ba">Bahmas</option>
                  <option value="bar">Barbados</option>
                  <option value="bs">Belize</option>
                  <option value="be">Bermuda</option>
                  <option value="bvi">British Virgin Islands</option>
                  <option value="ci">Cayman Islands</option>
                  <option value="cr">Costa Rica</option>
                  <option value="4522a">Curacao</option>
                  <option value="345">Dominican Replublic</option>
                  <option value="987">France</option>
                  <option value="00">French Polynesia</option>
                  <option value="87">Greece</option>
                  <option value="888">Grenada</option>
                  <option value="889">Guam</option>
                  <option value="890">Italy</option>
                  <option value="891">Jamaica</option>
                  <option value="892">Marshall Islands</option>
                  <option value="893">Mexico</option>
                  <option value="894">Northern Mariana Islands</option>
                  <option value="895">Palau</option>
                  <option value="896">Portugal</option>
                  <option value="897">Puerto Rico</option>
                  <option value="898">Spain</option>
                  <option value="899">St. Barts</option>
                </select>
              </div>
            </div>

            {/* Sixth row */}
            <div className="col-span-2">
              <div className="flex items-center ">
                <label htmlFor="terms" className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded focus:outline-none focus:shadow-outline mt-1 mr-2"
                    required
                  />
                  <span className="inline-block">
                    By submitting and sharing your information you agree to
                    WeddingPro’s terms of use and privacy policy.
                  </span>
                </label>
              </div>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className={`bg-purple-900 py-2 px-4 align-middle rounded-full border border-purple-900 font-bold text-white hover:bg-white hover:ring-purple-900 hover:text-purple-900 w-36 mx-auto md:mx-0`}
              >
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const Mp_navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
  };

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case "products":
        setShowProductsDropdown(!showProductsDropdown);
        setShowAboutDropdown(false);
        setShowResourcesDropdown(false);
        break;
      case "about":
        setShowAboutDropdown(!showAboutDropdown);
        setShowProductsDropdown(false);
        setShowResourcesDropdown(false);
        break;
      case "resources":
        setShowResourcesDropdown(!showResourcesDropdown);
        setShowProductsDropdown(false);
        setShowAboutDropdown(false);
        break;
      default:
        break;
    }
  };

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleCloseClick = () => {
    setShowNavbar(false);
    setShowSearchBar(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white rounded-none border border-gray-100 font-fontbody z-50 md:py-4">
        <div className="max-w-screen-xl mx-auto  flex md:justify-between ">
          {/* Menu Bar */}
          <div className="flex items-center space-x-4 h-10 w-8 px-5 py-8">
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showNavbar ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div className="flex justify-between gap-20 items-center  max-md:items-start max-md:flex-col">
            <div>
              <a href="#" className="mx-32">
                <img
                  src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/logo.svg"
                  classname="px-32"
                  alt="Flowbite Logo"
                />
              </a>
            </div>
            <div
              className={`md:flex flex-grow ${showNavbar ? "block" : "hidden"}`}
            >
              <div className="flex flex-col justify-between text-xl max-md:flex-1 gap-7 md:flex-row md:items-center  items-start space-y-4 md:space-y-0  md:pt-0  md:w-auto  w-52 md:h-auto  h-60">
                <Dropdown
                  title="Products"
                  showDropdown={showProductsDropdown}
                  toggleDropdown={() => toggleDropdown("products")}
                >
                  <a
                    href="#"
                    className="block  py-2  text-black hover:text-sky-500"
                  >
                    Products
                  </a>
                  <a href="#" className="block  text-black hover:text-sky-500">
                    Storefront
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Inbox
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Insights
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Reviews
                  </a>
                </Dropdown>
                <Dropdown
                  title="About WeddingPro"
                  showDropdown={showAboutDropdown}
                  toggleDropdown={() => toggleDropdown("about")}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    About WeddingPro
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Fellowship for Change
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Educator Program
                  </a>
                </Dropdown>
                <a href="#" className="text-gray-900 ">
                  Our Customers
                </a>
                <Dropdown
                  title="Resources"
                  showDropdown={showResourcesDropdown}
                  toggleDropdown={() => toggleDropdown("resources")}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Reports
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Webinars
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Events
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-sky-500"
                  >
                    Vendor Support
                  </a>
                </Dropdown>
                <a href="#" className="text-gray-900 ">
                  Blog
                </a>
              </div>
            </div>
            {/* Navbar */}
          </div>
          <div className=" flex flex-col  md:flex-row max-md:flex-col text-xl max-md:flex-none items-center space-y-4 md:space-y-0 md:space-x-4 md:ml-10">
            <a
              href="#"
              className={`md:flex flex-shrink  ${
                showNavbar ? "block" : "hidden"
              }`}
            >
              Log in
            </a>
            <button
              onClick={toggleSignupForm}
              className="bg-white px-5 py-4 relative rounded-full border border-purple-900 font-[700] text-lg  text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white text-center"
            >
              Sign Up
            </button>
            <button
              onClick={handleSearchClick}
              className="p-2 rounded-lg bg-purple-900 hover:bg-purple-950 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#fff"
                viewBox="0 0 21 20"
                className="ml-1"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  d="M9.78 11.22l-4.78 4.78"
                />
                <circle cx="9.5" cy="5.5" r="4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Search Bar */}
      {showSearchBar && (
        <div
          className="fixed top-0 left-0 right-0 bg-white py-2 z-50 font-fontbody"
          style={{
            "--t-transition-timing": "1s",
            "--t-transition-ease": "ease-in",
          }}
        >
          <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4 ">
            <div
              className="flex flex-row items-center justify-between w-full  border rounded border-grey-500"
              style={{
                transition:
                  "width var(--t-transition-timing) var(--t-transition-ease)",
              }}
            >
              {/* Search Input */}
              <div className="flex-grow mr-2">
                <form
                  role="search"
                  id="searchform"
                  className="search-form"
                  method="get"
                  action="https://pros.weddingpro.com/"
                >
                  <div className="autocomplete-field">
                    <input
                      type="search"
                      id="search-field"
                      value=""
                      placeholder="Search..."
                      name="s"
                      className="w-full px-3 py-3  focus:outline-none"
                    />
                    <div
                      id="autocomplete-wrapper"
                      className="autocomplete-content-wrapper"
                    ></div>
                  </div>
                  <input type="hidden" name="post_type" value="all" />
                </form>
              </div>
              {/* Search Button */}
              <button
                type="submit"
                className="search-submit border rounded-lg bg-purple-800 hover:bg-purple-900 px-2 py-1 font-bold text-white mr-2 flex items-center"
              >
                <span className="search-submit__label text-center">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#fff"
                  viewBox="0 0 21 20"
                  className="ml-1"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    d="M9.78 11.22l-4.78 4.78"
                  />
                  <circle cx="9.5" cy="5.5" r="4" />
                </svg>
              </button>
              {/* Close Button */}
              <button
                onClick={handleCloseClick}
                className="search-close border rounded-lg bg-white border-purple-950 px-2 py-1 font-bold text-purple-950 flex items-center mr-2"
              >
                <span className="search-submit__label mr-2 ">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 23 22"
                >
                  <path
                    fill="currentColor"
                    d="M2.384.116.616 1.884 9.732 11 .616 20.116l1.768 1.768 9.116-9.116 9.116 9.116 1.768-1.768L13.268 11l9.116-9.116L20.616.116 11.5 9.232 2.384.116Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Dropdown = ({ title, showDropdown, toggleDropdown, children }) => {
  return (
    <div>
      <div className="relative ">
        <span className="cursor-pointer" onClick={toggleDropdown}>
          {title}
        </span>
        <span className="ml-1 cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 inline-block transform transition-transform duration-300 ${
              showDropdown ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={toggleDropdown}
          >
            <path fillRule="evenodd" d="M10 3l-7 9h14l-7-9z" />
          </svg>
        </span>
        {showDropdown && (
          <div className="absolute z-10 mt-10 w-max bg-white">{children}</div>
        )}
      </div>
    </div>
  );
};

export default Mp_navbar;
