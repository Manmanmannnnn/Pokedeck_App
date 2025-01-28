import { FaSearch } from "react-icons/fa";
import "./Nav.css";

function Nav({ handleInputChange, name, handleFinalName }) {
  return (
    <div className='navArea'>
      <input
        type='text'
        value={name}
        placeholder='Enter Name here...'
        onChange={handleInputChange}
      />
      <button className='findBtn' onClick={() => handleFinalName()}>
        <FaSearch size={30} />
      </button>
    </div>
  );
}

export default Nav;
