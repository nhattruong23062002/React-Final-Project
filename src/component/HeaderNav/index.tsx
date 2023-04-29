import React from 'react'

const HeaderNav = ({children,customClassNav}: {children?: React.ReactNode,customClassNav?:string}) => {
  return (
    <nav className={customClassNav}>
    <ul className='main-nav d-flex'>
        {children}
    </ul>
    </nav>
  )
}

export default HeaderNav