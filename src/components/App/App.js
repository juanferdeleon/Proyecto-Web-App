import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import { configureStore } from "../../store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "../Login/login";
import Register from "../Register/register";

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
