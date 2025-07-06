import React from 'react';
import styled from '@emotion/styled';
import type { Unit } from './ProductCard.tsx';

type CartItem = {
  unit: Unit;
  quantity: number;
};

type CartPageProps = {
  cartItems: CartItem[];
  onRemove: (id: number) => void;
};

const Wrapper = styled.div`
  padding: 400px;
  max-width: 1000px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 30px;
  margin-bottom: 100px;
  margin-top: -400px;
   margin-left: 350px;

  
`;

const Text =styled.p`
 text-align: center;
  font-size: 20px;
  margin-bottom: 100px;
  margin-top: -40px;
    margin-left: 100px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const Image = styled.img`
  width: 180px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 20px;
`;

const Price = styled.p`
  margin: 4px 0;
  color: #666;
`;

const Quantity = styled.p`
  margin: 4px 0;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 18px;
  margin-left:50px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function CartPage({ cartItems, onRemove }: CartPageProps) {
  return (
    <Wrapper>
      <Title> </Title>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        cartItems.map((item) => (
          <Card key={item.unit.id}>
            <Image src={item.unit.imageId} alt={item.unit.name} />
            <Info>
              <Name>{item.unit.name}</Name>
              <Price>{item.unit.price}M</Price>
              <Quantity>Quantity: {item.quantity}</Quantity>
            </Info>
            <RemoveButton onClick={() => onRemove(item.unit.id)}>X</RemoveButton>
          </Card>
        ))
      )}
    </Wrapper>
  );
}
