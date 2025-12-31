"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { destaquesList } from "@/src/data/Destaques";

export const Destaques = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const TOTAL_ITEMS = destaquesList.length;

  // 👉 mesma lógica do Projects
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 1024) {
        setItemsPerPage(1); // mobile
      } else {
        setItemsPerPage(3); // mantém desktop como já estava
      }

      setStartIndex(0);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < TOTAL_ITEMS) {
      setStartIndex((prev) => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex((prev) => prev - itemsPerPage);
    }
  };

  const visibleItems = destaquesList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-screen lg:w-7xl">
      <p className="h-20 text-2xl text-center lg:text-start lg:text-6xl lg:h-36">
        Comece com um passo{" "}
        <strong className="text-(--snitap-sun)">à frente.</strong>
      </p>

      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-7xl">
          {/* LISTA */}
          <div className="flex gap-10 justify-center">
            {visibleItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-5">
                <Image
                  src={item.img}
                  alt="imagem de um iPhone"
                  width={372}
                  height={452}
                  className="rounded-3xl"
                />

                <p className="w-[370px] text-gray-700 mt-4 text-justify">
                  <strong className="text-black">{item.title} </strong>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* SETAS — DESIGN ORIGINAL */}
          <div className="h-20 flex justify-center gap-4 relative top-8 lg:left-[430px]">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-10 h-10 rounded-full bg-zinc-800 text-white disabled:opacity-40"
            >
              ‹
            </button>

            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= TOTAL_ITEMS}
              className="w-10 h-10 rounded-full bg-zinc-800 text-white disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destaques;
