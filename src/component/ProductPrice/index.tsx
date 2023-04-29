import React from 'react'

const ProductPrice = ({price=0,salePrice=0}:{price:number,salePrice?:number}) => {
  return (
    <>
    {salePrice>0 ? (
      <div className="product__price">
        <strong>{salePrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</strong>
        <del>{price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</del>
      </div>
    ): (
      <div className="product__price">
      <strong>{price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</strong>
    </div>
    )
    
    
    }
    </>
  )
}

export default ProductPrice