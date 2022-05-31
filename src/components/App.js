import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/_Index";
import Error404 from "./Error404";
import Nav from "./Nav";
import Playground from "./playground/_Index";

// firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from 'firebase/functions';

const dotenv = require("dotenv");
dotenv.config();

// Initialize Firebase Functions
const app = initializeApp({
  apiKey: "AIzaSyBsvDssRRLgRajAZOY_umx4gLQw7iFovyM",
  authDomain: "smilesdao.firebaseapp.com",
  projectId: "smilesdao",
  storageBucket: "smilesdao.appspot.com",
  messagingSenderId: "82122826003",
  appId: "1:82122826003:web:4082531d8b8b8836247ae6",
  measurementId: "G-K5MJ3B7PME",
});
const analytics = getAnalytics(app); // initialize analytics
const functions = getFunctions(app); // all your callable functions are now accessible fron your frontend

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={["/", "/wtf", "/how", "/faq", "/docs"]}>
          <Home />
        </Route>
        <Route exact path="/playground">
          <Playground />
        </Route>
        <Route exact path="/404">
          <Error404 />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
