import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
const ExpenseItem = (props)=>{
    
    return (
        <Card className='expense-item' key={props.id}>
            <ExpenseDate currentDate={props.currentDate}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>$ {props.price}</div>
                </div>
            </Card>
    )
}
export default ExpenseItem;