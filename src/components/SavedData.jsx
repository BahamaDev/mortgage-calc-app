import React from "react";

const SavedData = ({ saved, deleteEntry }) => {
  console.log(saved);

  return (
    <>
      <div className="card col-md-9 align-items-center border mx-auto ">
        <table className="table table-responsive-md table-striped table-hover table-bordered border mx-auto">
          <thead className="table-dark">
            <tr>
              <th className="text-center" scope="col">
                ID
              </th>
              <th className="text-center" scope="col">
                Purchase
              </th>
              <th className="text-center" scope="col">
                Down
              </th>

              <th className="text-center" scope="col">
                Principal
              </th>
              <th className="text-center" scope="col">
                Interest{" "}
              </th>
              <th className="text-center" scope="col">
                Term{" "}
              </th>

              <th className="text-center" scope="col">
                Payment
              </th>
              <th className="text-center" scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody text-center>
            {saved.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index}</td>
                  <td className="text-center">${item.purchasePrice}</td>
                  <td className="text-center">${item.downPayment}</td>
                  <td className="text-center">${item.principal}</td>
                  <td className="text-center">{item.interestRate}%</td>
                  <td className="text-center">
                    {item.period} <sup>yrs</sup>
                  </td>

                  <td className="text-center">${item.monthly}</td>
                  <td className="text-center">
                    <a
                      href="#"
                      onClick={(e, id) => deleteEntry(e, this)}
                      value={index}
                    >
                      <svg
                        value={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3 text-black-50"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>{" "}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SavedData;
