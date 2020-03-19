import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/signup">sign up</Link>
    </div>
  );
};

export default Home;
