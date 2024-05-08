import React, { Component } from 'react';
import Navbar from "./navbar";
import Product from "./product";
import ShoppingCart from './shopping-cart';

class App extends Component {
    state = { 
        items: []
     } 

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        currentItems.push({
            amount,
            name, 
            price
        });
        this.setState({items: currentItems});
        console.log(this.state)
    }

    render() { 
        return  <React.Fragment>
                    <Navbar/> 
                    <div className='main-container'>
                        <div className='product-container'>
                            <Product onAdd={() => this.addItem(1, 'Tomaten', 2.90)} image="tomatoes.jpg" title="Tomaten" description="Frische, geschmacksitensive Strauchtomaten aus Kampanien von Süditalien."/>
                            <Product onAdd={() => this.addItem(1, 'Gurken', 1.90)} image="cucumbers.jpg" title="Gurken" description="Knackige Gurken aus der Provinz Almería von Südspanien."/>
                            <Product onAdd={() => this.addItem(1, 'Äpfel', 4.90)} image="apples.jpg" title="Äpfel" description="Beste Pink Lady Äpfel aus Chile. Sie sind sehr süß, saftig und aromatisch im Geschmack."/>
                            <Product onAdd={() => this.addItem(1, 'Birnen', 3.90)} image="pears.jpg" title="Birnen" description="Saftig, süße Birnen aus den Niederlanden."/>
                        </div>
                        <ShoppingCart items={this.state.items}/>
                    </div>
                </React.Fragment>
    }
}
 
export default App;