import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import NewsPage from "./Components/News/NewsPage"
import Communitynext from "./Components/Communitynews/Communitynext";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/NewsPage" component={NewsPage} />
      <Route path="/ComNews" component={Communitynext} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

