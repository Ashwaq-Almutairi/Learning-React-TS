import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const Wrapper = styled.div`
  padding: 60px 100px;
  font-family: 'Segoe UI', sans-serif;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #2c3e50;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  gap: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const Detail = styled.p`
  font-size: 16px;
  color: #34495e;
  line-height: 1.6;
`;

type Product = {
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

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data)) 
      .catch(err => console.error(err)); 
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (!product) return <h1 style={{ textAlign: 'center' }}>Product not found</h1>;

  return (
    <Wrapper>
       <BackButton onClick={() => navigate(-1)}>       <span style={{ marginRight: 6 }}>←</span> Back
      </BackButton>


      <Card>
        <Image src={product.image} alt={product.title} />
        <Info>
          <Title>{product.title}</Title>
          <Detail><strong>Price:</strong> ${product.price}</Detail>
          <Detail><strong>Category:</strong> {product.category}</Detail>
          <Detail><strong>Description:</strong> {product.description}</Detail>
          <Detail><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</Detail>
        </Info>
      </Card>
    </Wrapper>
  );
}
