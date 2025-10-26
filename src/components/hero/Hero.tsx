export const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1>
          Apple Watch Ultra 3
          <div>
            <span>imparável</span>
            <span>recordista </span>
            <span>campeão</span>
            <span>imparável</span>
          </div>
        </h1>
        <div className="buttons">
          <a href="#" className="button buy shadow">
            <img src="/assets/icons/shopping-bag.svg" alt="" />
            COMPRAR AGORA
          </a>

          <a href="#" className="button">
            <span className="shadow play">
              <img src="/assets/icons/play.svg" alt="" />
            </span>
            VEJA EM AÇÃO
          </a>
        </div>
      </div>
    </div>
  );
};
