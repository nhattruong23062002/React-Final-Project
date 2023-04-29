import {create} from 'zustand';

interface ProductType {
    id:number;
    title:string;
    price:number;
    description:string;
    images:string;
    creationAt:string;
    updateAt:string;
    category:{
        id:number;
        name:string;
        image:string;
        creationAt:string;
        updateAt:string
    }
}

interface TypeState {
    products: ProductType[] | null;
    setProducts: (list: ProductType[]) => void;
    category: number; //All danh mục
    filterCategory: (id: number) => void
  }
  
  export const useProducts = create<TypeState>((set,get) => ({
     products: null,
     category: 0,
     filterCategory: (id) => set({category: id}),
     setProducts: (list) => set({products: list})
  }));
  