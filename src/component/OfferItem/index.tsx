import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './OfferItem.module.css'

const OfferItem = ({img,title,date,description,readmore,customClassOfferItem}:{img:string,title:string,date:string,description:string,readmore:string,customClassOfferItem?:string}) => {
  return (
  
    <li className={`${styles.wrapperOffer}`}>
        <img src={img} alt="" />
        <div className={customClassOfferItem}>
          <h4>{title}</h4>
          <span>{date}</span>
          <p>{description}</p>
          <div><a href="">{readmore}</a></div>
        </div>
    </li>
  
  )
}

export default OfferItem