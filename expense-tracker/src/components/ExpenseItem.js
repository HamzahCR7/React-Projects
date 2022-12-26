import './ExpenseItem.css';
function ExpenseItem(props){
    const month=props.currentDate.toLocaleString('en-IN',{month:'long'});
    const day=props.currentDate.toLocaleString('en-IN',{day:'2-digit'});
    const year=props.currentDate.getFullYear();
    return (
        <div className='expense-item' key={props.id}>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>$ {props.price}</div>
                </div>
            </div>
    )
}
export default ExpenseItem;