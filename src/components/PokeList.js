import React from "react";

function PokeList(props) {
  return (
    <div>
      <ul className="PokeList">{props.children}</ul>
    </div>
  );
}

export default PokeList;
