import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading d-flex justify-content-center p-5">
      <div
        className="spinner-border mb-5"
        role="status"
        style={{ width: "7rem", height: "7rem" }}
      ></div>
    </div>
  );
};

export default Loading;
