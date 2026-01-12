"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { destaquesTwoList } from "@/src/data/DestaquesTwo";

export const DestaquesTwo = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState<number | null>(null);

  const TOTAL_ITEMS = destaquesTwoList.length;

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      setItemsPerPage(width < 1024 ? 1 : 3);
      setStartIndex(0);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  if (itemsPerPage === null) return null;

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

  const visibleItems = destaquesTwoList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      <div className="relative w-full min-h-[620px]">
        <div className="flex justify-center gap-10 overflow-hidden pb-24">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6 items-center w-full"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={372}
                height={452}
                className="w-full max-w-[372px] rounded-3xl"
              />

              <p className="w-full max-w-[372px] text-gray-700 text-justify">
                <strong className="text-black">{item.title} </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            absolute bottom-6
            left-1/2 -translate-x-1/2
            flex gap-4
            lg:left-auto lg:translate-x-0 lg:right-0
          "
        >
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="w-10 h-10 rounded-full bg-zinc-800 text-white disabled:opacity-40 transition"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= TOTAL_ITEMS}
            className="w-10 h-10 rounded-full bg-zinc-800 text-white disabled:opacity-40 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestaquesTwo;
