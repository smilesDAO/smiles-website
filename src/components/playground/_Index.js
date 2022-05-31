// import PlaygroundHeader from './PlaygroundHeader';
// import PlaygroundControls from './PlaygroundControls';
// import PlaygroundPreview from './PlaygroundPreview';
// import PlaygroundContext from './PlaygroundContext';
import Smile from '../atoms/Smile';

const Playground = () => {
  const isMobile = document.defaultView.innerWidth < 500;
  const getMaxSize = () => {
    const screenWidth = Math.min(1080, document.defaultView.innerWidth);
    if (isMobile) {
      return screenWidth/2;
    } else {
      return screenWidth/4;
    }
  }

  return (
    <div className="playground-container">
      <h1 style={{fontFamily: "var(--title-font)"}}>Random Smiles</h1>
      <div className={`grid ${isMobile ? "mobile" : ""}`}>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
        <Smile random={true} maxSize={getMaxSize()}></Smile>
      </div>
      {/* <PlaygroundContext >
        <PlaygroundHeader/>
        <PlaygroundControls/>
        <PlaygroundPreview/>
      </PlaygroundContext> */}
    </div>
  );
};

export default Playground;
