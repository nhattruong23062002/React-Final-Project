import React from 'react'
import { useState } from 'react'

const Parameter = ({children}: {children?: React.ReactNode}) => {
  let [show,setShow] = React.useState<boolean>(false);
    let classShow =  show? 'tableparameter showall_parameter':'tableparameter'
    const handleclick =(() => {
        setShow(!show);
    })
    return (
      <section className={classShow} id="tableparameter">
          <h2 className="section_subtitle">Thông số sản phẩm</h2>
          <ul className="parameter">
              {children}
          </ul>
          <div onClick={handleclick} className="viewparameterfull" id="showall_parameter">
            Xem chi tiet
          </div>
      </section>
    )
  }

export default Parameter