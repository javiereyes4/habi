import React, { useState } from "react";
import { User, Property } from "../index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./componets/navbar";
import { I18nProvider, LOCALES } from "../../i18n";

function App() {
  const [language, setLanguage] = useState(LOCALES.SPANISH);

  const changeLanguage = (value) => {
    setLanguage(value);
  };

  return (
    <I18nProvider locale={language}>
      <Router>
        <NavBar changeLanguage={changeLanguage} />
        <div className="container">
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/property">
              <Property />
            </Route>
          </Switch>
        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;
