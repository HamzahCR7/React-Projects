import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: "exp1",
      title: "Car Insurance",
      price: "60000",
      currentDate: new Date(2022, 12, 26),
    },
    {
      id: "exp2",
      title: "Mobile Purchase",
      price: "7000",
      currentDate: new Date(2022, 12, 25),
    },
    {
      id: "exp3",
      title: "Vegetable Buy",
      price: "100",
      currentDate: new Date(2022, 12, 29),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        currentDate={expenses[0].currentDate}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        currentDate={expenses[1].currentDate}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        currentDate={expenses[2].currentDate}
      ></ExpenseItem>
    </div>
  );
}

export default App;
