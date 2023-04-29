import React from 'react'
import styles from './Introduce.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { Col, Row } from 'antd';

const Introduce = () => {
  return (
    <Row className={styles.wrapper}>
      <Col xs={24} md={24} lg={12} >
        <img src="./img/category-img-1.jpg" alt="" /> 
      </Col>
      <Col  xs={24} md={24} lg={12} >
        <div className={styles.information}>
            <div className={styles.informationTop}>       
            <h3>Our Services</h3>
            <h1>Responsive & Professional</h1>
            <p>We go the extra mile on every project. The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. Rest assured, we put the same level of energy into every project we take on.</p>
            </div>
            <div className={styles.informationBottom}>
                <h4>Call us today</h4>
                <span><FaPhoneAlt/>1900-111000</span>
                <p>We're available 24/7, 365 days a year.</p>
            </div>
        </div>
      </Col>
    </Row>
  )
}

export default Introduce