"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { destaquesList } from "@/src/data/Destaques";

export const Destaques = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState<number | null>(null);

  const TOTAL_ITEMS = destaquesList.length;

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

  // ⛔ evita render errado no mobile
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

  const visibleItems = destaquesList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <p className="h-20 text-2xl text-center lg:text-start lg:text-6xl lg:h-36">
        Comece com um passo{" "}
        <strong className="text-[var(--snitap-sun)]">à frente.</strong>
      </p>

      <div className="relative w-full">
        {/* LISTA */}
        <div className="flex justify-center gap-10 overflow-hidden">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 items-center w-full"
            >
              <Image
                src={item.img}
                alt="imagem de um iPhone"
                width={372}
                height={452}
                className="w-full max-w-[372px] rounded-3xl"
              />

              <p className="w-full max-w-[372px] text-gray-700 mt-4 text-justify">
                <strong className="text-black">{item.title} </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* SETAS */}
        <div className="h-20 flex justify-center gap-4 mt-6 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
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
  );
};

export default Destaques;
