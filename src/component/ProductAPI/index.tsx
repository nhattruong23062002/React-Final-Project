import React from 'react'
import { Row,Col } from 'antd';
import { useProducts } from '../../hooks/useProduct';
interface ProductType {
    id:number;
    title:string;
    price:number;
    description:string;
    images:string;
    creationAt:string;
    updateAt:string;
    category:{
        id:number;
        name:string;
        image:string;
        creationAt:string;
        updateAt:string
    }
}
const ProductAPI = () => {
   
    let products =  useProducts(state=> state.products);
    let setProducts = useProducts(state => state.setProducts);
    let category = useProducts(state => state.category);
    React.useEffect(()=>{
        const fetchProduct = async () => {
            try{
                let url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=4';
    
                let options = {
                    method: 'GET'
                }
                const response = await fetch(url)
                
                let result = await response.json();
                if(category > 0){
                    result = await result.filter((item: any)=>item.id == category)
                }
                if(!response.ok) {
                    const error = new Error('An Error Occured');
                    throw error;
                }
                setProducts(result);
            }
            catch(error) {
                console.log(error);
            }
            
        } 
        fetchProduct();
    
      },[category]);
  return (
    <Row gutter={[16,16]} className='wrapper__category'>
        {products && products.length>0 && products.map((item) =>{
            return(
                <Col className='box__category' key={item.id} span={6}>
                <img src={item.images} alt="" />
                <p>{item.title}</p>
                <span>Gia: {item.price}</span>
                <p>{item.description}</p>
               </Col>
            )
        })}
    </Row>
  )
}

export default ProductAPI