import React from 'react'
import HeaderLogo from '../../HeaderLogo'
import HeaderNav from '../../HeaderNav'
import HeaderCart from '../../HeaderCart';
import {navs} from '../../../component/data/navigations';
import HeaderNavItem from '../../HeaderNavItem';
import {FaAngleDown } from 'react-icons/fa'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import H3 from '../../H3';
const Header = () => {
  let [show,setShow] = React.useState(false);
  let classShowNav = show? 'show':''
  const handleClick=(()=>{
    setShow(!show)
  })
  return (
    <header>
      <div className="container">
          <div className="header__wrapper d-flex">
              <HeaderLogo/>
              <div className="header__right d-flex">
                  <HeaderNav>
                      {navs.map(nav => <HeaderNavItem key={nav.id} id={nav.id} link={nav.link} label={nav.label} target={nav.target} icon={nav.icon} childs={nav.childs}/>)}
                  </HeaderNav>   
                  <HeaderCart/>
                  <AiOutlineMenuUnfold onClick={handleClick} className='icon__menu'/>
                  <div className={`menu__nav ${classShowNav}`}>            
                  <HeaderNav customClassNav={classShowNav}>
                      {navs.map(nav => <HeaderNavItem key={nav.id} id={nav.id} link={nav.link} label={nav.label} target={nav.target}  icon={nav.icon} childs={nav.childs}/>)}
                  </HeaderNav>  
                  </div>             
              </div>

          </div>
      </div>
    </header>
  )
}

export default Header