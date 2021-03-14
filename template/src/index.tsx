import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./routes/Index";
import store from "./store";
import "./index.css";
import theme from "theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
