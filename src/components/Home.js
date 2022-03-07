import { ImGithub } from 'react-icons/im';

const Home = () => {
  return (
    <div className="home-container">
      <h1>SMILES.wtf</h1>
      <img src="https://avatars.githubusercontent.com/u/99566822?s=200&v=4" />
      <h2>One Smile, Every Day, Forever.</h2>
      <p>The random acts of kindness DAO.</p>
      <p>We are a fork of <a className="remove-all-link-styling" href="https://nouns.wtf/">NOUNS.wtf</a></p>
      <br />
      <a className="remove-all-link-styling" href="https://github.com/smilesDAO" alt="github">
        <ImGithub size={40}/>
      </a>
    </div>
  );
};

export default Home;
