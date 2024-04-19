import React, { Component } from 'react';
import Navbar from "./navbar";
import Product from "./product";

class App extends Component {
    state = {  } 
    render() { 
        return  <React.Fragment>
                    <Navbar/>
                    <div className='product-container'>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </React.Fragment>
    }
}
 
export default App;