import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
const ExpenseItem = (props)=>{
    const [title,setTitle]=useState(props.title);
    const [price,setPrice]=useState(props.price);

    const onCLickHandler=()=>{
        setTitle('UpDated!');
        setPrice('Price updated');
    }
    return (
        <Card className='expense-item' key={props.id}>
            <ExpenseDate currentDate={props.currentDate}/>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>$ {price}</div>
                </div>
                <button onClick={onCLickHandler}>Change Name</button>
            </Card>
    )
}
export default ExpenseItem;