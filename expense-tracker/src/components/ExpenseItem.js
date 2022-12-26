import './ExpenseItem.css';
function ExpenseItem(){
    const currentDate=new Date(2022,12,26);
    const expenseTitle='Car Insurance';
    const expensePrice=500.20;
    return (
        <div className='expense-item'>
            <div>{currentDate.toISOString()}</div>
                <div className='expense-item__description'>
                    <h2>{expenseTitle}</h2>
                    <div className='expense-item__price'>$ {expensePrice}</div>
                </div>
            </div>
    )
}
export default ExpenseItem;