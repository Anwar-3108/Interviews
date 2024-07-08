import { useEffect, useState } from "react";
import "./App.css";
// import MyTable from "./MyTable";
import MyTable from "./myTable";

function App() {
  const [expenseName, setExpenseName] = useState("");
  const [cost, setCost] = useState("");
  const [expensesDetails, setExpensesDetails] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setExpensesDetails([...expensesDetails, { name: expenseName, cost: parseInt(cost) }]);
    setExpenseName("");
    setCost("");
  };



  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="enter expense name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter expense cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {/* < myTable expensesdetails={expensesDetails}/> */}
      <MyTable expensesdetails={expensesDetails}/>
    </>
  );
}

export default App;
