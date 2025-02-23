function Card({ name, sprite }) {
  return (
    <div className="w-1/4 min-w-32">
      <p className="center mt-3 cursor-default text-2xl text-gray-200">
        {name}
      </p>
      <img className="m-auto w-1/2 cursor-pointer" src={sprite} alt="" />
    </div>
  );
}

export default Card;
