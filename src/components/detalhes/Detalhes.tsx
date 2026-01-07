"use client";

import { DetalhesList } from "@/src/data/Detalhes";
import Image from "next/image";
import { useState } from "react";

export const Detalhes = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative container mx-auto h-screen flex justify-center items-center">
      <div className="relative w-5/6 h-5/6 lg:w-11/12 rounded-3xl flex justify-around items-center bg-(--snitap-sky-mid) overflow-hidden">
        <div className="relative xl:right-14 z-10 flex flex-col gap-6">
          {DetalhesList.map((details, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 lg:items-start"
            >
              <button
                onClick={() => handleToggle(index)}
                className="text-white bg-gray-900 py-3 px-8 rounded-full w-fit hover:opacity-80 transition"
              >
                {details.title}
              </button>

              {openIndex === index && (
                <div
                  className="
                    relative -mt-4 mb-2
                    w-[320px]
                    animate-fade-in
                    bg-zinc-900/90 backdrop-blur-md text-white
                    rounded-3xl p-6 shadow-xl
                    lg:absolute lg:mt-0 lg:mb-0 lg:left-72
                  "
                >
                  <p className="text-sm leading-relaxed">
                    {details.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="opacity-70 absolute inset-0 z-0 flex justify-center items-center pointer-events-none lg:relative lg:opacity-100">
          <Image
            src="/assets/hero/adventure.png"
            alt="imagem de dois relógios"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
