function Card({ name, sprite }) {
  return (
    <div className="hover:hoverEffect w-1/4 min-w-32 rounded-2xl border-solid border-transparent p-2">
      <p className="center mt-3 cursor-default text-2xl text-gray-200">
        {name}
      </p>
      <img className="w-full" src={sprite} alt="" />
    </div>
  );
}

export default Card;
