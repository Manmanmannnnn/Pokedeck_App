import React from "react";

function Nav({ handleInputChange, name, handleFinalName }) {
  return (
    <div>
      <span>Search</span>
      <input
        type='text'
        value={name}
        placeholder='Enter Name here...'
        onChange={handleInputChange}
      />
      <button onClick={() => handleFinalName()}>Find</button>
    </div>
  );
}

export default Nav;
