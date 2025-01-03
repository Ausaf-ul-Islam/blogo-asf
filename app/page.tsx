"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaRegEye,
  FaRegComments,
  FaArrowRight,
} from "react-icons/fa";

import Typed from "typed.js";

export default function Home() {
  const typeEffect = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeEffect.current, {
      strings: [
        "inspirational ideas.",
        "creative articles.",
        "engaging blogs.",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 700,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="container min-h-screen px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-purple-800 dark:text-purple-300 md:text-4xl">
            Build Your <span className="font-extrabold text-purple-700">Blog Website</span> for
            sharing ideas and <br /> creating
            <span className="font-extrabold mx-2 decoration-primary text-purple-700 ">
              <span ref={typeEffect} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Start your journey with open-source tools and templates to create
            stunning blogs and articles!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg border-purple-700 focus-within:ring focus-within:ring-purple-700 dark:focus-within:ring-purple-300 focus-within:ring-opacity-40">
            <form className="flex justify-between md:flex-row">
              <input
                type="search"
                name="query"
                placeholder="Search Blog Ideas"
                required={true}
                className="flex-1 h-10 px-4 m-1 text-gray-800 placeholder-gray-500 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-purple-700 hover:bg-purple-600 dark:bg-purple-300 dark:text-gray-800 dark:hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300"
              >
                <FaSearch className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="/bloger.jpeg"
            alt="tailwind css components"
            width={400}
            height={400}
            className="w-full h-full max-w-md mx-auto"
          />

        </div>
      </section>

      {/* Services Section */}
      <section className="text-gray-600 dark:text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-4xl text-purple-800 dark:text-purple-300 pb-8 mb-4 font-bold text-center">
            About Our Services
          </h2>
          <div className="flex flex-wrap -m-4">
            {[
              {
                title: "WEB DEVELOPMENT",
                description:
                  "Building robust, scalable, and responsive web applications using modern tech stacks like React, Node.js, and more.",
                views: "2.4K",
                comments: "32",
              },
              {
                title: "MOBILE DEVELOPMENT",
                description:
                  "Crafting seamless mobile experiences for both Android and iOS using frameworks like React Native and Flutter.",
                views: "1.8K",
                comments: "18",
              },
              {
                title: "CLOUD SOLUTIONS",
                description:
                  "Implementing and managing cloud environments with AWS, Azure, and GCP to ensure your applications scale effortlessly.",
                views: "3.1K",
                comments: "24",
              },
            ].map((service, index) => (
              <div key={index} className="p-4 lg:w-1/3">
                <div className="h-full bg-white dark:bg-gray-800 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg border border-purple-700 dark:border-purple-300 transition-transform transform duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-400">
                  <h2 className="tracking-widest text-xs title-font font-medium text-purple-700 dark:text-purple-300 mb-1">
                    {service.title}
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {service.title.split(" ")[0]}
                  </h1>
                  <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-400">
                    {service.description}
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-400 duration-300 group"
                  >
                    Learn More
                    <FaArrowRight className="mx-2 transition-transform duration-300 transform group-hover:translate-x-1" />
                  </Link>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-500 dark:text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-purple-700 dark:border-purple-300">
                      <FaRegEye className="text-lg m-1" />
                      {service.views} Views
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaRegComments className="text-lg m-1" />
                      {service.comments} Comments
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
