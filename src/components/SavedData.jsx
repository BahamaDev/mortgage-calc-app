import React from "react";

const SavedData = ({ saved, deleteEntry, reloadEntry }) => {
  // console.log(saved);

  return (
    <>
      <div className="card col-md-12 align-items-center border mx-auto ">
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
              <th className="text-center" scope="col">
                Reload
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
                      onClick={(e, id) => deleteEntry(e, this)}
                      value={index}
                      className="icon"
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

                  <td className="text-center">
                    <a
                      onClick={(e, id) => reloadEntry(e, this)}
                      value={index}
                      className="icon"
                    >
                      <svg
                        value={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock-history text-black-50"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                        <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                      </svg>
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
