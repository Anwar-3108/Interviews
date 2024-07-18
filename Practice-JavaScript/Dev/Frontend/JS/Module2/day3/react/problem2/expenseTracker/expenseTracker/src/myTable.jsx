import React from "react";

const MyTable = ({ expensesdetails }) => {
  const totalCost = expensesdetails.reduce(
    (acc, curr) => acc + curr.cost,
    0
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Expense Name</th>

            <th>Cost</th>
          </tr>
        </thead>

        <tbody>
          {expensesdetails.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.cost}</td>
              </tr>
            );
          })}
          <tr>
            <td>
              <strong>Total : {totalCost}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
