import Image from "next/image";

export const Aventura = () => {
  return (
    <section className="w-11/12 relative overflow-hidden pb-[100px] lg:w-full">
      <div
        className="
          flex flex-col gap-8
          px-4 pt-10
          lg:absolute lg:top-0 lg:left-0 lg:pt-20 lg:pl-52
          max-w-full
        "
      >
        <div
          className="
            text-(--snitap-sun)
            text-5xl
            text-center
            font-bold
            mx-auto
            w-full
            lg:text-left
            lg:text-7xl
            lg:w-[800px]
          "
        >
          Vai com você pra cima e pra baixo.
        </div>

        <p className="text-justify text-2xl max-w-full pb-10 font-sans lg:w-[600px] lg:z-10">
          Para chegar ao topo da montanha ou mergulhar em águas profundas, você
          precisa das ferramentas certas. O Apple Watch Ultra 3 vem com recursos
          pioneiros, como uma bússola poderosa e um computador de mergulho
          completo. Assim, você não precisa levar muita coisa para ter os
          equipamentos de que precisa para qualquer expedição.
        </p>
      </div>

      <Image
        src="/assets/hero/safety_hero.jpg"
        alt=""
        width={1280}
        height={1000}
        className="w-full h-auto object-cover lg:opacity-35 xl:opacity-100"
        priority
      />
    </section>
  );
};

export default Aventura;
