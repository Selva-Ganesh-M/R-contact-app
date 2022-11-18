import React from "react";
import { Link } from "react-router-dom";

const GoHome = () => {
  return (
    <div>
      <Link to="/">
        <button className="ui button blue right">Home</button>
      </Link>
    </div>
  );
};

export default GoHome;
