import React from 'react'
import { useProducts } from '../../hooks/useProduct';
import { categorydata } from '../data/category';
interface ProductFilterType  {
    name: string
    id: number;
}

const FilterProduct = () => {
    let [filters,setFilters] = React.useState<Array<ProductFilterType> | null>(null)

    let filterCategory = useProducts(state => state.filterCategory);
    let category = useProducts(state => state.category);

  return (
    <div>
         <ul style={{marginTop:'10px'}}>    
        {categorydata && categorydata.length > 0 && categorydata.map((item)=>{
            return (
                    <li style={{marginTop:'10px'}} onClick={() =>{
                        filterCategory(item.id);
                    }} key={item.id}>{item.name}</li>
                    )
                })}
        </ul>
    </div>
  )
}

export default FilterProduct