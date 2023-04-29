import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import { useState } from 'react'
import { navs } from '../data/navigations'
import Item from 'antd/es/list/Item'
import { clear } from 'console'

interface NavType{
  link: string,
  label: string,
  target?: string
}
const HeaderNavItem = ({id,link='', label='', target='_self',icon,childs}: {id:number,link: string, label: string, target?: string,icon?:React.ReactNode,childs: Array<NavType | null >}) => {
  return (
    <li>
      <Link  to={link} target={target !== '' ? target: ''}>{label}<span className='icon__nav'>{icon}</span></Link>
      {childs && childs.length >0 ?(
        <div className="nav_child">
          {childs.map(child => {
            return (
              <ul key={child?.label}>
                <li><a href={child?.link} target={child?.target}>{child?.label}</a></li>
              </ul>         
              )
          })}
        </div>
      ) :null}
    </li>
    
  )
}

export default HeaderNavItem