import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Units } from './Units.tsx';

const CardGrid=styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:20px;
  padding:20px;
`;
const Card = styled.section`
  width: 300px;
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
`;
const TopImage=styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Name = styled.h2`
  text-align: center;
  margin: 16px 0 8px;
  font-size: 22px;
  color: #2c3e50;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  font-size: 14px;
  color: #34495e;
  border-top: 1px solid #eee;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  b {
    font-weight: 600;
    margin-bottom: 4px;
  }
`;
const ImageWrapper=styled.div`
  position:relative;
`;
const AddToCart=styled.button`

   display: flex;
  align-items: center;
  color:white;
  border:none;
  border-radius:12px;
 background:#01382F;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;



export type Unit={
  id:number;
  imageId: string;
  name: string;
  price:number;
  area:number;
  bedrooms: number;
  location:string;
  imageSize?: number;

};

type ProductProps={
  unit: Unit;
  onAddToCart:(unit:Unit) =>void;
};


function Product({unit,onAddToCart}:ProductProps){
  const [isFavoriate,setIsFavoriate]=useState(false);
return(
  // with emotion 
<Card>
  <ImageWrapper>
 <button onClick={()=> setIsFavoriate(!isFavoriate)
 }
style={{
      position: 'absolute',
      top: 8,
      right: 8,
      background: 'white',
      border: 'none',
      fontSize: '15px',
      cursor: 'pointer',
      color: isFavoriate ? 'red' : '#ccc'
  }}
  aria-label="Toggle favorite">
      ♥
  </button>
  </ImageWrapper>
    <Link to={`/product/${unit.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <TopImage src={unit.imageId} alt={unit.name}/>

  <Name>{unit.name}</Name>
  
  <InfoRow>
    <InfoItem>
      <b>Price:</b>
      {unit.price}M
    </InfoItem>
    <InfoItem>
      <b>Area: </b>
      {unit.area} sqm
    </InfoItem>
    <InfoItem>
      <b>Bedrooms:</b>
      {unit.bedrooms}
    </InfoItem>
    <InfoItem>
      <b>Location: </b>
      {unit.location}
    </InfoItem>
  </InfoRow>
  </Link>
  <ButtonWrapper>
  <AddToCart  onClick={()=> onAddToCart(unit)}>Add to cart 🛒</AddToCart>
  </ButtonWrapper>
</Card>

);
}


export default function ProductCard({ onAddToCart }: { onAddToCart: (unit: Unit) => void }){
return(
    <>
<CardGrid>
    {Units.map((unit)=>(
     <Product key={unit.id} unit={unit} onAddToCart={onAddToCart}/>
    ))}
</CardGrid>
</>
);
}
