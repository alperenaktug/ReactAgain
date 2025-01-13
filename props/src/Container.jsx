import React from "react";
import PropTypes from "prop-types";
function Container({ children }) {
  return (
    <div>
      <h1>Container Komponentine Hoşgeldiniz</h1>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
