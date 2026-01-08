import { Baterry } from "@/src/components/battery/baterry";
import Destaques from "@/src/components/destaques/Destaques";
import { Detalhes } from "@/src/components/detalhes/Detalhes";
import { Hero } from "@/src/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header>
        <a href="#">
          <img src="/icone.png" alt="logo da iPhone" />
        </a>
        <a href="#">
          <img
            src="/assets/icons/shopping-bag.svg"
            alt="logo de carrinho de compras"
          />
          <span>1</span>
        </a>
      </header>

      <Hero />

      <section className="banner w-full overflow-hidden">
        <div className="scroller bg-gradient-animate w-full overflow-hidden">
          <div className="rolling flex gap-6">
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
            <img src="/assets/banner.png" alt="" width={140} />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 text-center h-screen justify-center">
        <div>
          <Image
            src="/assets/hero/hero.png"
            alt="imagem de um iPhone"
            width={739}
            height={544}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 lg:relative lg:-top-36 lg:right-[378px]">
            <Image
              src="/icone.png"
              alt="logo Apple Watch"
              width={30}
              height={30}
            />
            <p className="uppercase lg:text-2xl">Watch Ultra 3</p>
          </div>

          <p className="text-lg font-semibold lg:relative lg:text-[50px] lg:-top-[152px] lg:right-[360px]">
            Imparável.
          </p>
        </div>

        <div className="h-20 flex items-center w-full justify-around bg-gray-100 lg:bg-transparent lg:relative lg:bottom-[195px] lg:right-28">
          <p className="font-bold w-52 text-start text-gray-800 lg:w-full">
            A partir de R$ 874,92/mês ou R$ 10.499*
          </p>
          <button className="text-white h-9 w-24 bg-blue-500 rounded-full lg:relative lg:left-32">
            Comprar
          </button>
        </div>
      </section>

      <Destaques />
      <Detalhes />
      <Baterry />
    </div>
  );
}
