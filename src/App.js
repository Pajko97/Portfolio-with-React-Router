import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CSS from './App.css'
import Icons from './Icons/font-mfizz.css'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Error from "./components/Error";
import Navigation from "./components/Navigation";


class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 