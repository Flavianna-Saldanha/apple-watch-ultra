export const Hero = () => {
  return (
    <section className="hero min-h-screen w-full flex items-center justify-center px-8 py-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full mx-auto gap-16">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-semibold leading-tight max-w-2xl mx-auto lg:mx-0">
            Apple Watch Ultra 3{" "}
            <div className="inline-block overflow-hidden h-20 w-min align-bottom">
              <span className="text-(--snitap-sky-mid)">imparável</span>
              <span className="text-(--snitap-joy-mid)">recordista </span>
              <span className="text-(--snitap-leaf-mid)">campeão</span>
            </div>
          </h1>

          <div className="buttons flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a
              href="#"
              className="button buy shadow font-medium px-6 py-3 rounded-full flex items-center gap-2 "
            >
              <img
                src="/assets/icons/shopping-bag.svg"
                alt="Bag"
                className="w-5 h-5"
              />
              COMPRAR AGORA
            </a>

            <a
              href="#"
              className="button play flex items-center gap-3 text-gray-800 hover:opacity-80 transition"
            >
              <span className="shadow bg-white rounded-full p-3 flex items-center justify-center">
                <img
                  src="/assets/icons/play.svg"
                  alt="Play"
                  className="w-5 h-5"
                />
              </span>
              VEJA EM AÇÃO
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <img
            src="/assets/hero/Ellipse.png"
            alt="Background"
            className="absolute -z-10"
          />
          <img
            src="/assets/hero/ultra-case.png"
            alt="Apple Watch Ultra 3"
            width={250}
            className="relative z-10"
          />
          <img
            src="/assets/hero/Stars 1.svg"
            alt="Stars"
            className="absolute bottom-10 left-0 w-10"
          />
          <img
            src="/assets/hero/Stars 2.svg"
            alt="Stars"
            className="absolute top-10 right-0 w-10"
          />
        </div>
      </div>
    </section>
  );
};
