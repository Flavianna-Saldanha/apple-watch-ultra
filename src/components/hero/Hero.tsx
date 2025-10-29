export const Hero = () => {
  return (
    <div className="hero max-w-7xl w-full py-10 px-8 mx-auto flex flex-col-reverse items-center gap-10 overflow-hidden xl:flex-row xl:justify-between">
      <div className="inicio flex flex-col items-center gap-7 xl:items-start">
        <h1 className="max-w-2xl text-center xl:text-start">
          Apple Watch Ultra 3
          <div className="inline-block overflow-hidden h-20 w-min align-bottom">
            <span className="text-(--snitap-sky-mid)">imparável</span>
            <span className="text-(--snitap-joy-mid)">recordista </span>
            <span className="text-(--snitap-leaf-mid)">campeão</span>
            <span className="text-(--snitap-sky-mid)">imparável</span>
          </div>
        </h1>
        <div className="buttons flex flex-col gap-8 mt-12 xl:flex-row">
          <a href="#" className="button buy shadow">
            <img src="/assets/icons/shopping-bag.svg" alt="" /> COMPRAR AGORA
          </a>
          <a href="#" className="button play">
            <span className="shadow">
              <img src="/assets/icons/play.svg" alt="" />
            </span>
            VEJA EM AÇÃO
          </a>
        </div>
      </div>
      <div className="block w-full max-w-96 h-[420px]">
        <div className="content w-full h-full relative">
          <img src="/assets/hero/Ellipse.png" alt="" />
          <img src="/assets/hero/ultra-case.png" alt="" />
          <img src="/assets/hero/Stars 1.svg" alt="" />
          <img src="/assets/hero/Stars 2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
