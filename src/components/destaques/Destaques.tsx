"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Destaques = () => {
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const ITEM_WIDTH = 412;
  const TOTAL_ITEMS = 6;

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const visibleItems = Math.floor(containerWidth / ITEM_WIDTH);

    setMaxIndex(Math.max(TOTAL_ITEMS - visibleItems, 0));
  }, []);

  const getTranslateX = () => {
    if (!containerRef.current) return 0;

    const containerWidth = containerRef.current.offsetWidth;
    const totalWidth = TOTAL_ITEMS * ITEM_WIDTH;

    const maxTranslate = Math.max(totalWidth - containerWidth, 0);
    const desired = index * ITEM_WIDTH;

    return Math.min(desired, maxTranslate);
  };

  return (
    <div>
      <h1>
        {" "}
        Comece com um passo{" "}
        <strong className="text-(--snitap-sun)">à frente.</strong>{" "}
      </h1>
      <div className="w-full flex justify-center">
        <div
          ref={containerRef}
          className="relative overflow-hidden w-full max-w-7xl"
        >
          <div
            className="flex gap-10 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${getTranslateX()}px)`,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="shrink-0">
                <Image
                  src={`/assets/images/${n}.jpg`}
                  alt="imagem de um iPhone"
                  width={372}
                  height={452}
                  className="rounded-3xl"
                />
                <p className="w-80 text-gray-700 mt-4">
                  <strong className="text-black">Conteúdo do card {n}. </strong>
                  Texto original mantido.
                </p>
              </div>
            ))}
          </div>

          <div className="h-20 flex justify-center gap-4 relative top-8 lg:left-[430px]">
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              disabled={index === 0}
              className="w-10 h-10 rounded-full bg-zinc-800 text-white disabled:opacity-40"
            >
              ‹
            </button>

            <button
              onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
              disabled={index === maxIndex}
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
