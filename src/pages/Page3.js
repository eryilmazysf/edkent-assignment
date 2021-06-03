import React from "react";
import { Link } from "react-router-dom";

function Page3() {
  return (
    <div
      style={{
        border: "1px solid orange",
        borderRadius: "50%",
        padding: "1rem",
        textAlign: "center",
        margin: "0 auto",
        position: "fixed",
        top: "50%",
        left: "50%",
        marginTop: "-100px",
        marginLeft: "-100px",
      }}
    >
      <Link to="/">
        <button>Turn Home Page</button>
      </Link>
      <h1>Page 3</h1>
    </div>
  );
}

export default Page3;
