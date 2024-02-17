import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mp_Navbar = () => {
  return (
    <div className="h-24 mb-10 shadow-md ">
      <div className="h-24 mb-8 z-[39] fixed w-full bg-white">
        <div className="flex items-center justify-between mx-auto container w-full h-full">

          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden z-40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu sm:pr-80 md:pl-20 menu-sm dropdown-content mt-2 z-[100] shadow bg-white rounded-box w-screen flex flex-col justify-between h-screen"
                >
                  <div>
                  <li>
                    <details className="text-xl">
                      <summary className="text-lg">Products</summary>
                      <ul className="p-2 bg-white">
                        <li>
                          <a>
                            <h4 className="text-lg">Products</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Storefront</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Inbox</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Insights</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Reviews</h4>
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary className="text-lg">About WeddingPro</summary>
                      <ul className="p-2 bg-white">
                        <li>
                          <a>
                            <h4 className="text-lg">About WeddingPro</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Fellowship for Change</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Educator Program</h4>
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a>
                      <h3 className="text-lg">Our Customers</h3>
                    </a>
                  </li>

                  <li>
                    <details>
                      <summary className="text-lg">Resources</summary>
                      <ul className="p-2 bg-white">
                        <li>
                          <a>
                            <h4 className="text-lg">Resources</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Reports</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Webinars</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Events</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-lg">Vendor Support</h4>
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a>
                      <h4 className="text-lg">Blog</h4>
                    </a>
                  </li>
                  </div>
                  <div className="mb-16">
                  <li>
                    {" "}
                    <a className="link link-primary mt-20">
                      <div className="w-full text-right bg-slate-200">
                          <h4 className="text-lg">Log In</h4>
                      </div>
                      
                    </a>
                  </li>

                  <li>
                    <button className="btn btn-square mt-5 w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="lucide lucide-search"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </button>
                  </li>
                  </div>
                </ul>
              </div>

              <Link href={"/"}>
                <Image
                  src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/logo.svg"
                  width={150}
                  height={150}
                  alt="Logo"
                  className="max-lg:hidden"
                />
              </Link>
            </div>
            <div className="navbar-center lg:hidden">
              
            <Link href={"/"}>
                <Image
                  src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/logo.svg"
                  width={150}
                  height={150}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-lg">
                <li>
                  <details>
                    <summary>Products</summary>
                    <ul className="p-2 bg-white">
                      <li>
                        <a>Products</a>
                      </li>
                      <li>
                        <a>Storefront</a>
                      </li>
                      <li>
                        <a>Inbox</a>
                      </li>
                      <li>
                        <a>Insights</a>
                      </li>
                      <li>
                        <a>Reviews</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>About WeddingPro</summary>
                    <ul className="p-2 bg-white">
                      <li>
                        <a>About WeddingPro</a>
                      </li>
                      <li>
                        <a>Fellowship for Change</a>
                      </li>
                      <li>
                        <a>Educator Program</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Our Customers</a>
                </li>

                <li>
                  <details>
                    <summary>Resources</summary>
                    <ul className="p-2 bg-white">
                      <li>
                        <a>Resources</a>
                      </li>
                      <li>
                        <a>Reports</a>
                      </li>
                      <li>
                        <a>Webinars</a>
                      </li>
                      <li>
                        <a>Events</a>
                      </li>
                      <li>
                        <a>Vendor Support</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="link link-primary px-2 max-xl:hidden">Log In</a>
              <a className="btn mx-2">Sign Up</a>
              <a>
                <button className="btn btn-square max-md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="lucide lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mp_Navbar;
