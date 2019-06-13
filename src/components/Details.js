import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import ButtonContainer from './Button'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,img,company,info,price,title,inCart} = value.detailProduct;
                return (
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                           <h1>{title}</h1>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                           <img src={img} className="img-fluid" alt="prod" />
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                           <h2> Model: {title}</h2>
                           <h4 className="text-blue">
                               Price: <span className="text-uppercase">{price}</span>
                           </h4>
                           <h5 className="mt-3 mb-2">
                               info: <span className="">{info}</span>
                           </h5>
                           <h4 className="text-title text-uppercase mt-3 mb-2">
                               id: <span className="text-uppercase">{id}</span>
                           </h4>
                           <h4 className="text-title text-uppercase  mt-3 mb-2">
                           company: <span className="text-uppercase">{company}</span>
                           </h4>
                           <div>
                               <Link to='/'>
                                   <ButtonContainer>
                                  Back To
                                   </ButtonContainer>
                               </Link>
                               <ButtonContainer disabled={inCart ? true : false} onClick={() => value.addToCart(id)}>
                                 {inCart? 'InCart' : "add to cart"}
                               </ButtonContainer>
                           </div>
                            </div>
                        </div>
                    </div>
                     
                );
                }}
            </ProductConsumer>
        )
    }
}
