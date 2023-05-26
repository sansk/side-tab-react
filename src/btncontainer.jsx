import React from "react";

export const BtnContainer = ({ jobs, currItem, setCurrItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrItem(index)}
            className={currItem === index ? "job-btn active-btn" : "job-btn"}>
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
