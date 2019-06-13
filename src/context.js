import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'


const ProductContext = React.createContext();



class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart:[]
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
        let temProducts = [...this.state.products];
        const index = temProducts.indexOf(this.getItem(id));
        const product = temProducts[index];
         product.inCart = true;
         product.count += 1;
         const price = product.price;
             product.total = product.count * price;
        this.setState(() => {
            return {products: temProducts,cart: [...this.state.cart,product]};
        }, () => {
            console.log(this.state);
            
        }
        )
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
