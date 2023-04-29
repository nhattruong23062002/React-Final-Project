import React from 'react'

const ListStar = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className="list__star">
        <ul>
            {children}
        </ul>
    </div>
  )
}

export default ListStar