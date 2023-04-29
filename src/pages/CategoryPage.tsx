import React from 'react'
import { Col, Divider, Row } from 'antd';
import ProductAPI from '../component/ProductAPI';
import FilterProduct from '../component/FilterProduct';

const CategoryPage = () => {
  return (
    <div className="container">
      <main>
        <Row>
          <Col span={6}>
          <h2>Bộ Lọc</h2>
          <FilterProduct/>
          </Col>
          <Col span={18}>
            <h2>Danh sách sản phẩm</h2>
            <ProductAPI/>
          </Col>
        </Row>
      </main>
    </div>
  )
}

export default CategoryPage
