const Ticker = ({tickerContent}) => { // "powered-by" or "how-it-works"
  return (
    <div className={`ticker-container ticker-${tickerContent}`}>
      <div className="ticker-content">
        <div className="sliding-background-container">
          <div className="sliding-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
