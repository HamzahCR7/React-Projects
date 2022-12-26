import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    
    return (
        <div className='expense-item' key={props.id}>
            <ExpenseDate currentDate={props.currentDate}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>$ {props.price}</div>
                </div>
            </div>
    )
}
export default ExpenseItem;