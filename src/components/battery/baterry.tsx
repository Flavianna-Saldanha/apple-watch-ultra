import Image from "next/image";

export const Baterry = () => {
  return (
    <section className="bg-black text-white flex justify-center">
      <div className="w-[80%] flex flex-col items-start gap-12 py-10">
        <div className="flex flex-col items-start gap-6">
          <div className="p-2 border-4 border-(--snitap-sun) rounded-full">
            <Image
              src="/assets/images/energia.png"
              alt="Símbolo de bateria"
              width={60}
              height={60}
              className="block"
            />
          </div>

          <h2 className="text-3xl font-semibold">
            Bateria recordista em duração.
          </h2>

          <p className="text-base text-zinc-400">
            Não para, não para, não para. A bateria do Apple Watch Ultra 3 foi
            projetada para você ir mais longe e por mais tempo. E, se precisar
            dar uma pausa, uma recarga rápida de apenas 15 minutos garante até
            13 horas de uso normal.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-zinc-400">
            Até <br />
            <strong className="text-4xl text-(--snitap-sun)">42h</strong> <br />
            de uso normal.
          </p>

          <p className="text-zinc-400">
            Até <br />
            <strong className="text-4xl text-(--snitap-sun)">72h</strong> <br />
            de uso normal no Modo Pouca Energia.
          </p>

          <p className="text-zinc-400">
            Até <br />
            <strong className="text-4xl text-(--snitap-sun)">14h</strong> <br />
            de treino ao ar livre com GPS e leitura de frequência cardíaca
            ativados.
          </p>

          <p className="text-zinc-400">
            Até <br />
            <strong className="text-4xl text-(--snitap-sun)">35h</strong> <br />
            de treino ao ar livre com a rede celular no Modo Pouca Energia e
            menos leituras de frequência cardíaca e GPS.
          </p>
        </div>
      </div>
    </section>
  );
};
