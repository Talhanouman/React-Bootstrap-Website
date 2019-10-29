import React, { Component } from "react";

import Home from './home/Home';
import Header from './header/Header';
import About from './about/About';
import News from './news/News';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
  return (
    <React.Fragment>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
    </Switch>
    </React.Fragment>

  );
}
  
}



export default App;
