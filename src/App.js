import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
