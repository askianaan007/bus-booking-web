import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../common/header/Header';

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/about">
              <About />
            </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default Pages
