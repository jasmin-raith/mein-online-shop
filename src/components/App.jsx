import React, { Component } from 'react';
import Navbar from "./navbar";
import Product from "./product";
import ShoppingCart from './shopping-cart';

class App extends Component {
    state = {  } 
    render() { 
        return  <React.Fragment>
                    <Navbar/> 
                    <div className='main-container'>
                        <div className='product-container'>
                            <Product image="tomatoes.jpg" title="Tomaten" description="Frische, geschmacksitensive Strauchtomaten aus Kampanien von Süditalien."/>
                            <Product image="cucumbers.jpg" title="Gurken" description="Knackige Gurken aus der Provinz Almería von Südspanien."/>
                            <Product image="apples.jpg" title="Äpfel" description="Beste Pink Lady Äpfel aus Chile. Sie sind sehr süß, saftig und aromatisch im Geschmack."/>
                            <Product image="pears.jpg" title="Birnen" description="Saftig, süße Birnen aus den Niederlanden."/>
                        </div>
                        <ShoppingCart/>
                    </div>
                </React.Fragment>
    }
}
 
export default App;