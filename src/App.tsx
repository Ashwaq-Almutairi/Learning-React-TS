import styled from '@emotion/styled';
import './App.css'
import fernandoImage from './assets/FernsnoAlonso.jpg';

const Card = styled.section`
  width: 300px;
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
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

type Person={
  imageId: string;
  name: string;
  price:number;
  wins:string;
  team: string;
};

type ProductProps = {
  person: Person;
  imageSize?: number;
};

function Product({ person}: ProductProps){
return(
  // with emotion 
<Card>
  <TopImage src={person.imageId} alt={person.name}/>
  <Name>{person.name}</Name>
  <InfoRow>
    <InfoItem>
      <b>Price:</b>
      ${person.price}M
    </InfoItem>
    <InfoItem>
      <b>Wins: </b>
      {person.wins}
    </InfoItem>
    <InfoItem>
      <b>Team:</b>
      {person.team}
    </InfoItem>
  </InfoRow>
</Card>

//with css
/*<section className="profile">
  <img
  className="avatar"
  src={person.imageId}
  alt={person.name}
  width={imageSize}
  height={imageSize} />
  <h2>{person.name}</h2>
  <ul>
    <li>
      <b>Price:$ </b> {person.price} <b>M</b>
    </li>
    <li>
      <b>Wins: </b>{person.wins}
    </li>
    <li>
      <b>Team: </b>{person.team}
    </li>
  </ul>
</section>*/
);
}


export default function ProductCard(){
  return(
<div>
 <Product person={{
  imageId: fernandoImage, 
  name: "Fernando Alonso",
  wins: "32",
  price:8.8,
  team: "Aston Martin"
}} />
</div>
  );
}