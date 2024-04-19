import React, { Component } from 'react';
import Navbar from "./navbar";
import Product from "./product";

class App extends Component {
    state = {  } 
    render() { 
        return  <React.Fragment>
                    <Navbar/>
                    <Product/>
                </React.Fragment>
    }
}
 
export default App;