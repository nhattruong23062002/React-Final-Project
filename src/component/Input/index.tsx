import React from 'react'
import Button from '../Button/Button'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './Input.module.css'
import { Col, Row } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
interface typeInput{
  name:string,
  email:string, 
  phone: string
}
const schema = yup.object({
  name: yup.string().min(4,'Vui lòng nhập đủ 4 ký tự').required(),
  email: yup.string().email().required('Vui lòng nhập đúng email'),
  phone: yup.number().min(10).required('Vui lòng nhập số'),
}).required();
type FormData = yup.InferType<typeof schema>;

const InputValidate = ({customClassCol,placeholderName,placeholderEmail,placeholderPhone,customWrapperInput,customInput,labelButton,cuttomIconButon,customClassBtn,errorMassageName,errorMassageEmail,errorMassagePhone}:{placeholderName:string,placeholderEmail:string,placeholderPhone:string,customWrapperInput:string,customInput:string,customClassBtn:String,labelButton:string,cuttomIconButon?:React.ReactNode,errorMassageName:string,errorMassageEmail:string,errorMassagePhone:string,customClassCol?:number}) => {
  let[success,setSuccess] =React.useState(false);
  let[loading,setLoading] =React.useState(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [input, setInput] = useState<typeInput>({name:'',email:'',phone:''});
  const { register,resetField, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => {
    let handleSubmit= async ()=>{
      setLoading(true);
      try {
          
        let url = 'https://jsonplaceholder.typicode.com/posts';
  
        //Dữ liệu cần để gọi API
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data) //convert sang json string
        }
        const response = await fetch(url, options);
  
        let result = await response.json();
  
        if(!response.ok) {
            const error = new Error('An Error Occured');
            throw error;
        }
        setSuccess(true)
        setLoading(false)
        resetField('name')
        resetField('email')
        resetField('phone')
        console.log(result);
      }
        catch(error) {

      }
    }
    handleSubmit();
  }
 
  return (
    <div className='input__comment'>
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles[customWrapperInput]}`}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={customClassCol}>
      <input className={`${styles[customInput]}`}  {...register("name")}  type="text"  placeholder={placeholderName} />
      <p className={`${styles[errorMassageName]}`}>{errors.name?.message}</p>
        </Col>
        <Col xs={24} md={12} lg={customClassCol}>
      <input className={`${styles[customInput]}`}   {...register("email")}  type="text"  placeholder={placeholderEmail} />
      <p  className={`${styles[errorMassageEmail]}`}>{errors.email?.message}</p>
        </Col>
        <Col xs={24} md={12} lg={customClassCol}>
      <input className={`${styles[customInput]}`}   {...register("phone")} type="text"  placeholder={placeholderPhone} />
      <p className={`${styles[errorMassagePhone]}`}>{errors.phone?.message}</p>
        </Col>
        <Col xs={24} md={12} lg={customClassCol}>
      <div><Button lable={labelButton} icon={cuttomIconButon} customClass={`btn-${customClassBtn}`}/></div>
      {success && <div className={styles.successSend}>Đã gửi thành công!...</div>}
      {loading && <div> <Spin indicator={antIcon} /></div>}
        </Col>
      </Row>
    </form>
    </div>
  )
}

export default InputValidate