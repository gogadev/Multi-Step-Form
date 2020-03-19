import React from "react";
import "./success.style.css";

const Success = () => {
  return (
    <div>
      <div className="navbar">
        Thank You For Your Submission <i className="fas fa-user-check"></i>
      </div>
      <div className="message">
        <p>
          {" "}
          <i class="fas fa-envelope-open-text"></i> Shortly, You Will Receive An Email With Further Instructions...
        </p>
      </div>
    </div>
  );
};

export default Success;
