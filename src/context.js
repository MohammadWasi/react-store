import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'


const ProductContext = React.createContext();



class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct
    };
componentDidMount() {
    this.setProducts();
}
    setProducts = () => {
        let temproducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            temproducts = [...temproducts,singleItem];
        })

        this.setState(() =>{
            return {products: temproducts}
        })

    }
getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
}
    handleDetail = (id) => {
        const product = this.getItem(id);

        this.setState(() =>{
            return {detailProduct: product}
        })
        
    };

    addToCart = (id) => {
        console.log('hello from cart',id)
    }

    render() {
        return (
            <div>
                <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
