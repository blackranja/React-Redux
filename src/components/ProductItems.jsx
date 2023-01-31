import React, { useState } from 'react';
import ReactDom from 'react-dom';
import ProductItem from './ProductItem';
import {productss} from '../data/data1';

const ProductItems = () => {
    const [products, setProducts] = useState(productss);
    return (
         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full itmes-center justify-between">
            {
                products.map((productList, index) => {
                    const { farmerName, farmAddress , img,title,farmReviews,farmId,farmXp,farmProducts,farmCapacity,farmProductionRate} = productList;
                    return (
                       
                        <ProductItem farmerName={farmerName} farmAddress={farmAddress} farmReviews={farmReviews} farmId={farmId} farmXp={farmXp} farmProducts={farmProducts} farmCapacity={farmCapacity} farmProductionRate={farmProductionRate} img={img} title={title}  key={index}/>
                      
                   )
               }) 
            }
        </div>
    )
};
export default ProductItems;