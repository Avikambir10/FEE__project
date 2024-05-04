import React from 'react'
import ProductData from './ProductData'
import './Product.css'

const Product = () => {
  return (
    <>
      <div className='container-4'>
        {
            ProductData.map((curElm) => {
                return (
                  <>
                    <div className="card">
                      <div className="img-box">
                        <img className='product-img' src={curElm.img} alt={curElm.Title}></img>
                      </div>
                      <div className="detail">
                        <div className="info">
                          <p className='shoe-name'>{curElm.Title}</p>
                          <p className='price'>INR {curElm.Price}</p>
                        </div>
                        <button onClick={() => onAddToCart(curElm.id)}>Add to cart</button>
                      </div>
                    </div>
                  </>
                );
            })
        }
      </div> 
    </>
  )
}

export default Product
