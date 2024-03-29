import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../data'
import {ProductConsumer} from '../context'

export default class ProductList extends Component {

    state = {
        products: storeProducts
    }

    render() {
        
        return (
            <React.Fragment>
            <div className="py-5">
             <div className="conatainer">
              <Title name='our' title='products'></Title>
              <div className="row">
                <ProductConsumer>
                    {(val) => {
                     return val.products.map(product => {
                         return <Product key={product.id} product={product} />
                     })
                    }}
                </ProductConsumer>
              </div>
             </div>
            </div>
            </React.Fragment>
        )
    }
}
