import React from 'react'
import {FaStar} from "react-icons/fa";
const ListStarItem = ({id,starActice,label}:{id:number,starActice:string,label:string}) => {
  return (
    <li>
    <div className="list__star-left">{id} <span><FaStar/></span></div>
    <div className="list__star-center">
        <div className={`list__star-active ${starActice}`}>
        </div>
        <div className="list__star-empty">
        </div>
    </div>
    <div className="list__star-right">{label} đánh giá</div>
  </li> 
  )
}

export default ListStarItem