import "./Card.css";

function Card({ name, sprite }) {
  return (
    <div className='cardDiv'>
      <p>{name}</p>
      <img src={sprite} alt='' />
    </div>
  );
}

export default Card;
