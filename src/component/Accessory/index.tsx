import styles from './Accessory.module.css'
import { useState,useEffect } from 'react';
import { listAccessory } from '../data/accsessory';
 interface typeProduct{
    item:{
        img:string,
        title: string,
        price:number,
        oldPrice?: number,
        isSale ?: boolean
    }
} 

function AccessoryItem({item}:typeProduct ){
    return(
        <li className={styles.product}>
            <img className={styles.img} src={item.img} alt="" />
            <div className={styles.wrapper__infor}>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.wrapper__price}>
                    {item.isSale ? 
                         <span className={styles.price}>{item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                     : (
                        <>
                        <span className={styles.price}>{item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                         <del className={styles.oldPrice}>{item.oldPrice}</del>
                        </>
                         )
                    }
                     
                </div>
            </div>
        </li>
    )
}

function Accessory(){
    return(
        <>
        <ul className={styles.list}>
           {
            listAccessory.map((item,index) => {
                return (
                    <AccessoryItem
                        key= {`listProduct${item.id}`}
                        item = {item}
                    />
            )})
           }
        </ul>
        </>
    )
}
 

export default Accessory;