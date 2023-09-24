import { Product } from '@/types';
import React, { FC } from 'react'

interface ProductListProps {
    title:string;
    items:Product[];
}

const ProductList:FC<ProductListProps>= ({title,items}) => {
  return (
    <div className='space-y-4'>
        <h3>{title}</h3>
    </div>
  )
}

export default ProductList