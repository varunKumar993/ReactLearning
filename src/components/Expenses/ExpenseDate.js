import './ExpenseDate.css';

const ExpenseDate= (props)=>{
    const month = props.date.toLocaleString('en-US', {month: '2-digit'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();


    return (
        <div className="expense-date">
                <div className="expense-month">{month}</div>
                <div className="expense-year">{year}</div>
                <div className="expense-day">{day}</div>
            </div>
    )

}
export default ExpenseDate;