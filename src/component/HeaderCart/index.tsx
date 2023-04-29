import React from 'react'
import {FaShoppingCart } from 'react-icons/fa'
import Button from '../Button/Button'
import { useState } from 'react'

const HeaderCart = () => {
  let [show,setShow] = useState(false);
  let classShow = show? 'modal__carts show':'modal__carts'
  const handleclick = (() => {
    setShow(!show);
  } )
  return (
    <>
    <div onClick={handleclick} className="header__cart">
       <FaShoppingCart/>
    <em>0</em>
  </div>
    <div className={classShow}>
    <p>Danh sach san pham</p>
    <div onClick={() => {setShow(false)}}>
    <Button lable='Close'/>
    </div>
    </div>
    </>
  )
}

export default HeaderCart