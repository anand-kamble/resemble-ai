import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, NotFound } from "./Pages";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;
