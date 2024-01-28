
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './UI/card'


const ExpenseItem=(props)=>{
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
            <div>{props.LocationOfExpenditure}</div>
        </Card>
    )
    
    }
export default ExpenseItem;