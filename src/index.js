import React from "react"
import ReactDom from "react-dom"
import Navbar from "./components/navbar";
import Product from "./components/product";
import "bootstrap/dist/css/bootstrap.min.css"

ReactDom.render(<Product/>, document.getElementById("root"));