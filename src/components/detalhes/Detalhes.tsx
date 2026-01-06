import { DetalhesList } from "@/src/data/Detalhes";
import Image from "next/image";

export const Detalhes = () => {
  return (
    <div className="relative container mx-auto h-screen flex justify-center items-center">
      <div className="relative w-5/6 h-5/6 lg:w-11/12 rounded-3xl flex justify-around items-center bg-(--snitap-sky-mid) overflow-hidden">
        <div className="relative z-10">
          {DetalhesList.map((details, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 rounded-xl lg:items-start"
            >
              <div>
                <p className="cursor-pointer text-white bg-gray-900 py-4 px-8 rounded-full w-fit hover:opacity-80">
                  {details.title}
                </p>
              </div>
              <div>
                <p className="hidden">{details.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="opacity-70 absolute inset-0 z-0 flex justify-center items-center pointer-events-none lg:relative lg:opacity-100">
          <Image
            src={"/assets/hero/adventure.png"}
            alt="imagem de dois relógio"
            width={800}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
