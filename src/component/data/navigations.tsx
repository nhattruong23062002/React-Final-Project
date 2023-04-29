import { FaAngleDown } from "react-icons/fa";
export const navs = [
    {id: 1, link:'/', label:'Home',target:'',childs:[]},
    {id: 2, link:'/blog', label:'Blog',target:'',icon:<FaAngleDown/>,childs : [
      {id: 1, link:'index.html', label:'NavChild1',target:''},
      {id: 2, link:'blog.html', label:'NavChild2',target:''},
      {id: 3, link:'category.html', label:'NavChild3',target:''},
    ]},
    {id: 3, link:'/category', label:'Category',target:'',childs:[]},
    {id: 4, link:'/product', label:'Product',target:'',childs:[]},
    {id: 5, link:'/login', label:'Login',target:'',childs:[]}
  ];