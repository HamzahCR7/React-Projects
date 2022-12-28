import './ExpenseDate.css'
const ExpenseDate=(props)=>{
    if(props){
    const month=props.currentDate.toLocaleString('en-IN',{month:'long'});
    const day=props.currentDate.toLocaleString('en-IN',{day:'2-digit'});
    const year=props.currentDate.getFullYear();
    
    return(
        <div className="expense-date">
        <div className="expense-date__month ">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
    </div>  
    )
    }
}
export default  ExpenseDate;