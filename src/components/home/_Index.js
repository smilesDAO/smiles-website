import { ImGithub } from 'react-icons/im';
import Banner from './Banner';
import Ticker from './Ticker';
import Wtf from './Wtf';
import Tutorial from './Tutorial';
import Jobs from './Jobs';
import Faq from './Faq';

const Home = () => {
  return (
    <div className="home-container">
      <Banner/>
      <Ticker tickerContent={"powered-by"} />
      <Wtf/>
      <Ticker tickerContent={"how-it-works"} />
      <Tutorial/>
      <Jobs/>
      <Faq/>
    </div>
  );
};

export default Home;
