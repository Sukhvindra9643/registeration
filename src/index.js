import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);
