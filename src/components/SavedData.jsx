import React from "react";

const SavedData = ({ saved }) => {
  console.log(saved);

  return (
    <>
      {saved.map((item, index) => {
        return (
          <div className="card" key={index}>
            Purchased:{item.purchasePrice}, Down:{item.downPayment}
          </div>
        );
      })}
    </>
  );
};

export default SavedData;
