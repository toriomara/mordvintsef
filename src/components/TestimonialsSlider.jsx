// https://cruip.com/how-to-build-a-fancy-testimonial-slider-with-tailwind-css-and-next-js/
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { FiUser } from "react-icons/fi";

export const TestimonialsSlider = ({ testimonials }) => {
  const testimonialsRef = useRef(null);
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto text-center my-10">
      {/* Testimonial image */}
      <div className="relative h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] md:w-[480px] md:h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 dark:before:from-primary/25 before:via-indigo-500/5 dark:before:via-primary/5 before:via-25% before:to-indigo-500/0 dark:before:to-primary/0 before:to-75% before:rounded-full before:-z-10">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                as="div"
                key={index}
                show={active === index}
                className="absolute inset-0 h-full -z-10 duration-700"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
                beforeEnter={() => heightFix()}
              >
                {testimonial.image ? (
                  <Image
                    className="relative top-4 left-1/2 -translate-x-1/2 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                  />
                ) : (
                  <FiUser className="relative top-4 left-1/2 -translate-x-1/2 rounded-full w-[100px] h-[100px]" />
                )}
              </Transition>
            ))}
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mb-6 min-h-[500px] xs:min-h-[400px] md:min-h-[300px] lg:min-h-[240px] xl:min-h-[200px] transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              as="div"
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-md xs:text-lg md:text-xl before:content-['\201C'] after:content-['\201D']">
                {testimonial.text}
              </div>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center -m-1.5">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
              active === index
                ? "text-white bg-blue-500 dark:bg-green-500 dark:text-slate-900 shadow-indigo-950/10"
                : "bg-[#f4f6fb] dark:bg-white border border-1 hover:bg-indigo-100 text-slate-900"
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span>{testimonial.name}</span>{" "}
            <span
              className={`${
                active === index ? "text-indigo-200" : "text-slate-300"
              }`}
            >
              {/* - */}
            </span>{" "}
            <span>{testimonial.estimation}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
