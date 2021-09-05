import React from 'react'
const ProductList = (props) => {
    return (
        <div>
            {props.products.map((products, idx)=>{
                return <p key={idx}>{products.title}</p>
            })}
        </div>
    )
}
export default ProductList;