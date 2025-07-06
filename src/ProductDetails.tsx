import { useParams,useNavigate } from 'react-router-dom';
import {Units} from './Units';
import styled from '@emotion/styled';

const Wrapper = styled.div`
 padding-left:100px;
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
  align-item:center;
  flex-direction: row;
  gap: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const Image = styled.img`
  width: 850px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const Detail = styled.p`
  font-size: 16px;
  color: #34495e;
  line-height: 1.6;
`;

export default function ProductDetails() {
  const { id } = useParams();
  const unit =Units.find(u => u.id.toString() === id);
  const navigate = useNavigate();

  if(!unit){
    return <h1 style={{textAlign: 'center'}}> Unit not found </h1>
  }

  return (
     <Wrapper>
     <BackButton onClick={() => navigate(-1)}>       <span style={{ marginRight: 6 }}>←</span> Back
      </BackButton>

      <Card>
        <Image src={unit.imageId} alt={unit.name} />
        <Info>
          <Title>{unit.name}</Title>
          <Detail><strong>Price:</strong> {unit.price}M</Detail>
          <Detail><strong>Area:</strong> {unit.area} sqm</Detail>
          <Detail><strong>Bedrooms:</strong> {unit.bedrooms}</Detail>
          <Detail><strong>Location:</strong> {unit.location}</Detail>
        </Info>
      </Card>
    </Wrapper>
  );
}
