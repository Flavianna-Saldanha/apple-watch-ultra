import Image from "next/image";

export const Detalhes = () => {
  return (
    <div className="container mx-auto h-screen">
      <div className="h-5/6 rounded-3xl flex justify-around items-center bg-(--snitap-sky-mid)">
        <div>
          <div>
            Cores
            <p></p>
          </div>
          <div>
            Tela
            <p></p>
          </div>
          <div>
            Bateria
            <p></p>
          </div>
          <div>
            Durabilidade
            <p></p>
          </div>
          <div>
            Resistência à água e poeira
            <p></p>
          </div>
          <div>
            Botão de Ação
            <p></p>
          </div>
          <div>
            Pulseiras
            <p></p>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/hero/adventure.png"}
            alt="imagem de dois relógio"
            width={900}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
