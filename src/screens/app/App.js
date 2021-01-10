import React, { useState } from "react";
import { User } from "../index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./componets/navbar";
import { I18nProvider, LOCALES } from "../../i18n";
import { FormattedMessage } from "react-intl";

function App() {
  const [language, setLanguage] = useState(LOCALES.SPANISH);

  const changeLanguage = (value) => {
    setLanguage(value);
  };

  return (
    <I18nProvider locale={language}>
      <Router>
        <NavBar changeLanguage={changeLanguage} />
        <Switch>
          <Route path="/user">
            <User></User>
          </Route>
        </Switch>
      </Router>
    </I18nProvider>
  );
}

export default App;
