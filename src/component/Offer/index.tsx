import React from 'react'
import { news } from '../data/offer'
import OfferItem from '../OfferItem'
import styles from './Offer.module.css'
import { Col, Row } from 'antd'


const Offer = ({customWrapOffer,customClass='',customClassCol}:{customWrapOffer:string,customClass?:string,customClassCol:number}) => {
  return (
    <Row  gutter={[16, 16]} className={`${styles.listOffers} ${styles[customClass]}`}>
        {news.map((item,index) => {
          return (
                  <Col  key= {`list${item.title}`} xs={24} md={12} lg={customClassCol}>  
                    <OfferItem                     
                        img={item.img}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        readmore={item.readmore}     
                        customClassOfferItem={`${styles[customWrapOffer]}`}           
                        />
                   </Col>
            )})}
      </Row>  
  )
}

export default Offer