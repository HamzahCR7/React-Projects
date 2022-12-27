import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
function Expenses(props){
    
      return (
        <Card className="expenses">
          {/* <ExpenseItem
            title={props.items[0].title}
            price={props.items[0].price}
            currentDate={props.items[0].currentDate}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            price={props.items[1].price}
            currentDate={props.items[1].currentDate}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            price={props.items[2].price}
            currentDate={props.items[2].currentDate}
          ></ExpenseItem> */}
          {
            props.items.map((data,index)=>(
                <ExpenseItem key={index} title={data.title} price={data.price} currentDate={data.currentDate}/>
            ))
          }
        </Card>
      );

}
export default Expenses;