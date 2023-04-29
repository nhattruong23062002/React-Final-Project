import React from 'react'
import styles from './FooterItem.module.css'

const FooterItem = ({title,children,customClassLi}:{title:string,children?:React.ReactNode,customClassLi?:string}) => {
  return (
    <li className={styles.footerItem}>
        <h4 >{title}</h4>
        <ul className={customClassLi}>
            {children}
        </ul>
    </li>
  )
}

export default FooterItem