import React from 'react'
import Products from '../json/Products'
import ProductBox from './sub-components/ProductBox'

function Body(){
    const productList = Products.map(item => <ProductBox key={item.id} details = 
        {{
            id:item.id,
            type:item.type,
            brand:item.brand,
            price:item.price,
            description:item.description,
            img:item.img,
            color:item.color
        }}
        />)
        
    return(
        <div>{productList}</div>
    );
}

export default Body