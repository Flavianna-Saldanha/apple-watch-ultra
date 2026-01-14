import Image from "next/image";

export const MeioAmbiente = () => {
  return (
    <div className="w-full bg-zinc-100 py-24 flex justify-center">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col">
        <div className="pb-20">
          <div className="text-5xl font-semibold max-w-2xl">
            O Apple Watch Ultra 3 <br /> e o meio ambiente.
          </div>
        </div>

        <div className="flex justify-between gap-8">
          <div className="bg-white rounded-3xl p-10 w-[400px] min-h-[220px] flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <Image
                src="/assets/icons/reciclavel.png"
                alt="icone de reciclavel"
                width={36}
                height={36}
              />
              <div className="text-2xl w-64">
                <p>
                  Produzido com{" "}
                  <strong className="text-(--snitap-joy-mid)">
                    40% do peso em material reciclado.
                  </strong>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center text-2xl">
                +
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 w-[400px] min-h-[220px] flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <Image
                src="/assets/icons/energia.png"
                alt="icone de raio"
                width={36}
                height={36}
              />
              <div className="text-2xl w-64">
                <p>
                  Fabricado com{" "}
                  <strong className="text-(--snitap-sun)">
                    100% de eletricidade renovável.
                  </strong>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center text-2xl">
                +
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 w-[400px] min-h-[220px] flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <Image
                src="/assets/icons/caixa-de-embalagem.png"
                alt="icone de caixa de embalagem"
                width={36}
                height={36}
              />
              <div className="text-2xl w-64">
                <p>
                  Envio em{" "}
                  <strong className="text-(--snitap-sky-mid)">
                    embalagem 100% composta por fibras.
                  </strong>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center text-2xl">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
