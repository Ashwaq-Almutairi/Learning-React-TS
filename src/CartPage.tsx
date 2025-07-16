import React from 'react';
import styled from '@emotion/styled';
import type { Unit } from './ProductCard.tsx';
import { Link } from 'react-router-dom';


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
  width: 500px;
  height:400px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 30px;
  margin-bottom: 100px;
  margin-top: -380px;
   margin-left: 220px;

  
`;

const Text =styled.p`
 text-align: center;
  font-size: 20px;
  margin-bottom: 100px;


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
  width: 100px;
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
  font-size: 15px;
`;

const Price = styled.p`
  margin: 4px 0;
  color: #666;
`;

const Quantity = styled.p`
  margin: 4px 0;
  font-weight: bold;
   font-size: 12px;
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

const Total = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 50px;
  margin-left: 10px;
`;
const Checkout=styled.button`
    background: #01382F;
    text-align: center;
      margin-top: 50px;
    margin-left: 200px;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;


export default function CartPage({ cartItems, onRemove }: CartPageProps) {
    const totalPrice = cartItems.reduce(
  (total, item) => total + item.unit.price * item.quantity,
  0
);

  return (
    <Wrapper>
         <Title>Cart</Title>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        cartItems.map((item) => (
          <Card key={item.unit.id}>
            <Image src={item.unit.image} alt={item.unit.title} />
            <Info>
              <Name>{item.unit.title}</Name>
              <Price>{item.unit.price}$</Price>
              <Quantity>Quantity: {item.quantity}</Quantity>
            </Info>
            <RemoveButton onClick={() => onRemove(item.unit.id)}>X</RemoveButton>
          </Card>
        ))
      )}
      {cartItems.length > 0 && (
    <Total>Total: {totalPrice.toFixed(2)}$</Total>
    )}
   <Checkout>
        <StyledLink to="/checkout">Checkout</StyledLink></Checkout>
    </Wrapper>
  );
}
