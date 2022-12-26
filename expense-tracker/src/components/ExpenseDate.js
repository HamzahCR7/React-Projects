import './ExpenseDate.css'
function ExpenseDate(props){
    if(props){
    const month=props.currentDate.toLocaleString('en-IN',{month:'long'});
    const day=props.currentDate.toLocaleString('en-IN',{day:'2-digit'});
    const year=props.currentDate.getFullYear();
    
    return(
        <div class="expense-date">
        <div class="expense-date__month ">{month}</div>
        <div class="expense-date__year">{year}</div>
        <div class="expense-date__day">{day}</div>
    </div>  
    )
    }
}
export default  ExpenseDate;