// import logo from "./logo.svg";
import React from 'react'
import "./App.css";
import ExpenseItem from "./components/Expenses/Expenses";

const App=()=> {
  const expenses = [
    {
      id: "e0",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2024, 2, 28),
      Location : 'Delhi',
    },
    { id: "e1", title: "New Tv", amount: 799.49, date: new Date(2024, 2, 28), Location:'Gurgaon' },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2024, 2, 28),
      Location: 'Mumbai',
    },
    {
      id: "e3",
      title: "New Desk (Woden)",
      amount: 294.67,
      date: new Date(2024, 2, 28),
      Location: "Hyderabad",
    }
   
  ];
  return(
    <div className="App">
    <h1>Expensify</h1>
    </div>
  )

}

export default App;
