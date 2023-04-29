import React from 'react'
import Header from '../component/layout/Header/Header'
import Main from '../component/layout/Main/Main'
import Footer from '../component/layout/Footer/Footer'
import { parmeters } from '../component/data/parameter'
import Parameter from '../component/Parameter'
import PrameterItem from '../component/Parameter/ParameterItem'
import { FaAngleRight,FaCheckCircle,FaCheckSquare,FaArrowCircleLeft,FaShoppingBag ,FaRegHeart,FaStar} from "react-icons/fa";
import ProductGallery from '../component/ProductGallery';
import List from '../component/List/List'
import Button from '../component/Button/Button'
import Attribute from '../component/Attribute'
import ProductPrice from '../component/ProductPrice'
import Accessory from '../component/Accessory'
import H3 from '../component/H3'
import Offer from '../component/Offer'
import Review from '../component/ListStar'
import InputValidate from '../component/Input'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
const ProductPage = () => {
  return (
    <>
    <Main>
      <div className="main__wrapper d-flex">
        <div className="main__content">
              <div className="breadcrumb">
                  Home <FaAngleRight/>  Category Xiaomi <FaAngleRight/> Redmi Note 11S 5G
              </div>
              <div className="product__wrapper d-flex">
                <div className="gallery">
                    <ProductGallery/>
                </div>
                <div className="product__infor">
                    <div className="product__title">Samsung Galaxy S21 FE 5G (8GB/128GB)</div>
                    <ProductPrice price={16990000} salePrice={12900000}/>
                    <div className="attribute">
                    <p>Màu sắc:</p>
                    <Attribute label='Đen' activeColor='activeColor'/>
                    <Attribute label='Hồng'/>
                    <Attribute label='Xanh'/>
                    </div>
                    <ul>
                          <List
                          icon ={<FaCheckCircle/>}
                          title='Bộ sản phẩm gồm:'
                          lable=' Hộp,Sách hướng dẫn,Cây lấy sim'
                          />
                          <List
                          icon ={<FaCheckSquare/>}
                          title='Bảo hành:'
                          lable=' Chính hãng 12 tháng'
                          />
                          <List
                          icon ={<FaArrowCircleLeft/>}
                          title='Đổi trả:'
                          lable=' Hư gì đổi nấy 12 tháng'
                          />
                    </ul>
                    <Button 
                      icon = {<FaShoppingBag/>}
                      lable = "Thêm vào giỏ hàng"
                    />
                    <Button 
                      icon = {<FaRegHeart/>}
                      lable = "Yêu thích"
                      customClass='dark'
                    />

                </div>
              </div>
              <Accessory />
              <div className="main__content">
                <H3 label="Bài viết đánh giá"/>
                <p>Đón năm mới rộn ràng cùng với series Galaxy S21 đến từ Samsung. Phiên bản tiêu chuẩn cho series lần này là Samsung Galaxy S21 5G, nổi bật với thiết kế tràn viền, cụm camera ấn tượng cho đến hiệu năng mạnh mẽ hàng đầu.</p>
                <H3 label='“Bộ cánh” mới nổi bật và sang trọng'/>
                <p>Nổi bật với cụm camera sau được thiết kế đầy mới lạ, phần khuôn hình chữ nhật chứa bộ 3 camera ôm trọn cạnh trái của chiếc smartphone, viền khuôn cong uyển chuyển, hạn chế tối đa độ nhô ra so với mặt lưng, mang lại cái nhìn tổng thể hài hòa, độc đáo.</p>
              </div>
              <H3 label='Đánh giá Sản phẩm'/>
              <Review/>
              <div className="input__comment">
              <h4>Mời bạn đánh giá<FaStar/> <FaStar/> <FaStar/> <FaStar/><FaStar/></h4>
              <textarea className='inputComment' placeholder="Nội dung tiếng việt có dấu" name="content" id="content" ></textarea>
              </div>
              <InputValidate placeholderName='Nhap ten (bat buoc)' placeholderEmail='Nhap mail (bat buoc)' placeholderPhone='Nhap DT (bat buoc)' customWrapperInput='wrapperInputProduct' customInput='InputProduct' labelButton='Danh gia'  customClassBtn='inputBtnProduct' errorMassageName='errorMassageNameProduct' errorMassageEmail='errorMassageEmailProduct' errorMassagePhone='errorMassagePhoneProduct' customClassCol={24}/>
        </div>
        <div className="main__sidebar">
            <Parameter>
              {parmeters.map(item => <PrameterItem key={item.id} label={item.key} value={item.value} />)}
            </Parameter>
            <H3 label='Tin tức liên quan'/>
            <Offer customWrapOffer='' customClassCol={24}/>
        </div>
      </div>
          
    </Main>
    </>
  )
}

export default ProductPage