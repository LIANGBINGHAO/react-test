import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { INDEX_LINK, DETAIL_LINK } from "../actions/types";
import Index from "./views/Index";
import Detail from "./views/Activity/Detail";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route path={DETAIL_LINK} component={Detail} />
            <Route path={INDEX_LINK} component={Index} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
