import React from 'react'
import Button from '../Button/Button';
import Summary from './Summary';
import ListStar from './ListStar';
import ListStarItem from './ListStarItem';
import { liststars } from '../data/liststar';

const Review = () => {
  return (
    <div className="wrapper__reviews">
    <Summary/>
    <ListStar>
        {liststars.map((item) =>       
            <ListStarItem key={item.id} id={item.id} starActice={item.starActice} label={item.lable}/>
        )}
    </ListStar>
    <div className="btn__review">
        <div><Button lable='Gửi đánh giá của bạn'/></div>
    </div>
</div>
  )
}

export default Review