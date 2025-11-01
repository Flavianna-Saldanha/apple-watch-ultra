import { Hero } from "@/src/components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-36">
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
    </div>
  );
}
