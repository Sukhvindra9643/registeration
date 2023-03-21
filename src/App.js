import "./App.css";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Layout from "./components/layout/Layout";
import Home from "./components/Home/Home";
import Center from "./components/Center/Center";
import Contacts from "./components/ContactUs/ContactUs";
import NotFound from "./components/layout/Not Found/NotFound";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    //eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {<Route exact path="/center" element={<Center />} />}
          {<Route exact path="/contact" element={<Contacts />} />}
          {<Route exact path="*" element={<NotFound />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
