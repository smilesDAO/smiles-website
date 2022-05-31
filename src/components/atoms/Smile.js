import Random from "../helper/Random";

const Smile = ({ background, head, smile, shoe, eye, random = false, maxSize = "100px"}) => {
  // generate image urls
  const generateTraitImageUrl = (traitType, traitName) => {
    return `/traits/${traitType}/${traitName}.PNG`;
  }
  console.log(Random);
  const imageUrls = [
    // generateTraitImageUrl("background", random ? Random.background() : background),
    generateTraitImageUrl("shoe", random ? Random.shoe() : shoe),
    generateTraitImageUrl("head", random ? Random.head() : head ),
    generateTraitImageUrl("smile", random ? Random.smile() : smile ),
    generateTraitImageUrl("eye", random ? Random.eye() : eye),
  ]

  //
  return (
    <div className="smile-container" style={{"maxWidth": maxSize, "maxHeight": maxSize}}>
      <div className="ref">
        { imageUrls.map((imageUrl, indx) => (
          <img src={imageUrl} key={indx}/>
        ))}
      </div>
    </div>
  );
};

export default Smile;
