import React from 'react'
import FooterItem from '../../FooterItem'
import ItemLi from '../../FooterItem/ItemLi'
import { Col, Row } from 'antd';
const Footer = () => {
  return (
    <footer>
      <div className="container">
      <Row className='footer__list'>
        <Col className='footer__item'  xs={24} md={12} lg={6}>          
        <FooterItem title='ABOUT US'>
          <ItemLi label='Electrician'/>
          <ItemLi label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus.'/>
          <ItemLi label='Duis nec vestibulum magna, et dapibus lacus.'/>
        </FooterItem>
        </Col>
        <Col className='footer__item' xs={24} md={12} lg={6}>
        <FooterItem title='CONTACT INFO'>
          <ItemLi strong='Address:' label='123 Street Name, City, England'/>
          <ItemLi strong='Phone:' label='(123) 456-7890'/>
          <ItemLi strong='Email:' label='mail@example.com'/>
          <ItemLi strong='Working Days/Hours:' label='Mon - Sun / 9:00 AM - 8:00 PM'/>
        </FooterItem>
        </Col>
        <Col className='footer__item'  xs={24} md={12} lg={6}>
        <FooterItem title='CUSTOMER SERVICE'>
          <ItemLi label='Help & FAQs'/>
          <ItemLi label='Order Tracking'/>
          <ItemLi label='Shipping & Delivery'/>
          <ItemLi label='Orders History'/>
          <ItemLi label='Advanced Search'/>
          <ItemLi label='Corporate Sales'/>
          <ItemLi label='Privacy'/>
        </FooterItem>
        </Col>
        <Col className='footer__item' xs={24} md={12} lg={6}>
        <FooterItem title='POPPULAR TAGS' customClassLi='customClassLi'>
          <ItemLi label='Bag' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Black' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Blue' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Clothes' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Fashion' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Hub' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Jean' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Shirt' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Skirt' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Sports' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Sweater' customClassItemLi='customClassItemLi'/>
          <ItemLi label='Winter' customClassItemLi='customClassItemLi'/>
        </FooterItem>
        </Col>
      </Row>
       <p className='footerBottom'>© Aptech eCommerce. 2022. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer