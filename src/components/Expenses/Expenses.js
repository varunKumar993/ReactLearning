import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css';
const Expenses = (props)=>{
    return (
        <div>
          <h1>Let's Get Started</h1>
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            LocationOfExpenditure={props.items[0].Location}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
            LocationOfExpenditure={props.items[1].Location}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
            LocationOfExpenditure={props.items[2].Location}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
            LocationOfExpenditure={props.items[3].Location}
          ></ExpenseItem>
        </div>
      );
    }
