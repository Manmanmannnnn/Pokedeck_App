import { FaSearch } from "react-icons/fa";

function Nav({ handleInputChange, name, handleFinalName }) {
  return (
    <div className="flex w-full items-center justify-center p-2">
      <input
        className="rounded-2xl p-2 text-xl"
        type="text"
        value={name}
        placeholder="Enter Name here..."
        onChange={handleInputChange}
      />
      <button className="p-2 text-gray-300" onClick={() => handleFinalName()}>
        <FaSearch size={35} />
      </button>
    </div>
  );
}

export default Nav;
