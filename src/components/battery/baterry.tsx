import Image from "next/image";

export const Baterry = () => {
  return (
    <section className="bg-black text-white flex justify-center">
      <div className="w-[80%] flex flex-col items-start gap-12 py-10 lg:w-2/3">
        <div className="flex flex-col items-start gap-6">
          <div className="p-2 border-4 border-(--snitap-sun) rounded-full">
            <Image
              src="/assets/images/energia.png"
              alt="Símbolo de bateria"
              width={40}
              height={40}
              className="block"
            />
          </div>

          <div className="text-3xl font-semibold lg:text-6xl">
            Bateria recordista em duração.
          </div>

          <p className="text-base text-zinc-400 lg:text-2xl lg:w-[750px]">
            Não para, não para, não para. A bateria do Apple Watch Ultra 3 foi
            projetada para você ir mais longe e por mais tempo. E, se precisar
            dar uma pausa, uma recarga rápida de apenas 15 minutos garante até
            13 horas de uso normal.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 lg:grid lg:grid-cols-2 lg:text-2xl lg:gap-24">
          <p className="text-zinc-400 ">
            Até <br />
            <strong className="text-4xl text-(--snitap-sun) lg:text-6xl">
              42h
            </strong>{" "}
            <br />
            de uso normal.
          </p>

          <p className="text-zinc-400">
            Até <br />
            <strong className="text-4xl text-(--snitap-sun) lg:text-6xl">
              72h
            </strong>{" "}
            <br />
            de uso normal no Modo Pouca Energia.
          </p>

          <p className="text-zinc-400 lg:w-80">
            Até <br />
            <strong className="text-4xl text-(--snitap-sun) lg:text-6xl">
              14h
            </strong>{" "}
            <br />
            de treino ao ar livre com GPS e leitura de frequência cardíaca
            ativados.
          </p>

          <p className="text-zinc-400">
            Até <br />
            <strong className="text-4xl text-(--snitap-sun) lg:text-6xl">
              35h
            </strong>{" "}
            <br />
            de treino ao ar livre com a rede celular no Modo Pouca Energia e
            menos leituras de frequência cardíaca e GPS.
          </p>
        </div>
      </div>
    </section>
  );
};
