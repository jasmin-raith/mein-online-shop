import React from "react"
import ReactDomClient from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/index.css"
import App from "./components/App"

const root = ReactDomClient.createRoot(document.getElementById("root"));

root.render(<App/>);