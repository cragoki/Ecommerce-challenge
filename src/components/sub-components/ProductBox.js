import React from 'react'

function ProductBox(prop){
    return(
        <div className="productbox-container">
            <div className="productbox-img">
                <img src={"/img/" + prop.details.img}/>
            </div>
            <div className="productbox-name"><p>{prop.details.brand + prop.details.type}</p></div>
            <div className="productbox-description">
                <p>{prop.details.description}</p>
            </div>
        </div>
    )
}

export default ProductBox