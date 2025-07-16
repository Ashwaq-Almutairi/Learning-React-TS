import ProductCard from './ProductCard.tsx';
import type {Unit} from './ProductCard.tsx';
import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled'

type ProductListPageProps={
     units: Unit[];
    onAddToCart:(unit:Unit)=>void;
}
const CardGrid = styled.div`
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px;
`;

function ProductListPage({units,onAddToCart}:ProductListPageProps){
    const[products,setProducts]=useState<Unit[]>([]);
    const [loading,setLoading]=useState(true);
    const[error,setError]=useState<String|null>(null);

   useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json();
    })
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
    return(
    <CardGrid>
 {products.map((unit) => (
       <ProductCard key={unit.id} unit={unit} onAddToCart={onAddToCart} /> 
      ))}    </CardGrid>
    );
}
export default ProductListPage;