import React from "react";
import PropTypes from "prop-types";

function PokeList(props) {
  return (
    <div>
      <ul className="PokeList">{props.children}</ul>
    </div>
  );
}
PokeList.propTypes = {
  children: PropTypes.array.isRequired
};

export default PokeList;
