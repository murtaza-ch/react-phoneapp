import React, { Component } from 'react';
import {ProductConsumer} from './context';
import {NavLink} from 'react-router-dom';
import {ButtonContainer} from './Button'; 
class Details extends Component {
    state = {  }
    render() { 
        return ( 
           <ProductConsumer>
               {value=>{
                   const {id,company,img,info,title,price,inCart}=value.detailProduct;
                   return(
                       <div className="container py-5">
                           
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                   <h1>{title}</h1>
                               </div>
                           </div>

                           <div className="row">

                               <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="Product" className="img-fluid"/>
                               </div>

                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <h2>model: {title}</h2>
                                   <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                       made by: <span className="text-uppercase">{company}</span>
                                   </h4>
                                   <h4 className="text-blue">
                                       <strong>
                                           price: <span>$</span>{price}
                                       </strong>
                                   </h4>
                                   <p className="text-capitalize font-weight mt-3 mb-0">
                                       some info about product:
                                   </p>
                                   <p className="text-muted lead">
                                       {info}
                                   </p>
                                   
                                   <div>
                                       <NavLink to='/'>
                                       <ButtonContainer>
                                           back to product
                                       </ButtonContainer>
                                       </NavLink>
                                       <ButtonContainer
                                       cart 
                                       disabled={inCart ? true:false}
                                       onClick={()=>{
                                           value.addToCart(id);
                                           value.openModal(id)
                                       }}>
                                           {inCart ? 'In Cart':'add to cart'}
                                       </ButtonContainer>
                                   </div>

                               </div>
                           </div>

                       </div>
                   )
                   
               }}
           </ProductConsumer>
         );
    }
}
 
export default Details;
