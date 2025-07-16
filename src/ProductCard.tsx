
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../src/store/features/cart/cartSlice.ts';




export type Unit = {
 id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductCardProps = {
  unit: Unit;
  onAddToCart: (unit: Unit) => void;
};

const Card = styled.section`
  width: 300px;
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  gap:10px;
`;

const TopImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Name = styled.h2`
  text-align: center;
  margin: 16px 0 8px;
  font-size: 15px;
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

const AddToCart = styled.button`
  display: flex;
  align-items: center;
  color: white;
  border: none;
  border-radius: 12px;
  background: #01382f;
  padding: 10px 20px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;
const ImageWrapper=styled.div`
  position:relative;
`;



function ProductCard({ unit, onAddToCart }: ProductCardProps) {
    const [isFavoriate,setIsFavoriate]=useState(false);
    const dispatch = useDispatch();

  const handleAdd = () => {
  dispatch(addToCart(unit)); 
};

  return (
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
      <TopImage src={unit.image} alt={unit.title} />

      <Name>{unit.title}</Name>

      <InfoRow>
        <InfoItem>
          <b>Price:</b>
          ${unit.price}
        </InfoItem>
        <InfoItem>
          <b>Category:</b>
          {unit.category}
        </InfoItem>
        <InfoItem>
          <b>Rating:</b>
          {unit.rating.rate} ({unit.rating.count})
        </InfoItem>
      </InfoRow>
</Link>
      <ButtonWrapper>
        <AddToCart onClick={() => onAddToCart(unit)}>Add to cart 🛒</AddToCart>
      </ButtonWrapper>
    </Card>
  );
}


export default ProductCard;
