import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";

function App() {
  return (
    <div id="page-body">
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/articles-list" component={ArticlesList} exact />
          <Route path="/article" component={ArticlePage} exact />
        </div>
      </Router>
    </div>
  );
}

export default App;
