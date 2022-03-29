import { ImGithub } from 'react-icons/im';
import Banner from './Banner';
import Ticker from './Ticker';
import Wtf from './Wtf';
import Tutorial from './Tutorial';
import Jobs from './Jobs';
import Faq from './Faq';
import SmilesColors from '../atoms/SmilesColors';

const Home = () => {
  return (
    <div className="home-container">
      <Banner/>
      <Ticker
        speed={10}
        backgroundColor={SmilesColors.green}
        height={70}
        imageUrl={"/tickerImages/tickerPoweredBy.svg"}
        scale={0.8}
        imageWidth={2939}
        // paddingY={"20px"}
        />
      <Wtf/>
      {/* <Ticker
        speed={1}
        backgroundColor={SmilesColors.green}
        height={140}
        // scale={0.2}
        imageUrl={"/tickerImages/tickerHowItWorks.svg"}
      /> */}
      <Tutorial/>
      <Jobs/>
      <Faq/>
    </div>
  );
};

export default Home;
