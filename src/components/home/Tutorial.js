import tutorial1 from "../../img/tutorial1.png";
import tutorial2 from "../../img/tutorial2.png";
import tutorial3 from "../../img/tutorial3.png";

const Tutorial = () => {
  const data = [
    {
      name: "tutorial1",
      img: tutorial1,
      text1: "every 24 hours",
      text2: "a smile nft is born",
      textHighlighted: "and auctioned off."
    },
    {
      name: "tutorial2",
      img: tutorial2,
      text1: "money from that",
      text2: "auction goes in",
      textHighlighted: "to the trasury."
    },
    {
      name: "tutorial3",
      img: tutorial3,
      text1: "the dao votes &",
      text2: "funds random",
      textHighlighted: "acts of kindness."
    },
  ]
  return (
    <div className="tutorial-container">
      {data.map((tutorial, indx) => {
        return <TutorialStep tutorial={tutorial} indx={indx} />
      })}
    </div>
  );
};

const TutorialStep = ({tutorial, indx}) => {
  return (
    <div key={indx} className={`tutorial-step ${tutorial.name}`}>
      <div className="upper-content">
        <div className="upper-content-left">
          <div className="circled-number">{indx + 1}</div>
        </div>
        <div className="upper-content-right">
          <img src={tutorial.img} alt="" />
        </div>
      </div>
      <div className="lower-content">
        <p>
          {tutorial.text1.toUpperCase()}< br/>
          {tutorial.text2.toUpperCase()}< br/>
          <strong>{tutorial.textHighlighted.toUpperCase()}</strong>< br/>
        </p>
      </div>
    </div>
  )
}

export default Tutorial;
