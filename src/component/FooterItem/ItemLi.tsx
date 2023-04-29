import React from 'react'

const ItemLi = ({label,strong,customClassItemLi}:{label:string,strong?:string,customClassItemLi?:string}) => {
  return (
    <li className={`itemLi ${customClassItemLi}`}><p className='strongItemLi'>{strong}</p>{label}</li>
  )
}

export default ItemLi