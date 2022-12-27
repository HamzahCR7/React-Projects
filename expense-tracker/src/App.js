import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: "exp1",
      title: "Car Insurance",
      price: "60000",
      currentDate: new Date("10/24/2022"),
    },
    {
      id: "exp2",
      title: "Mobile Purchase",
      price: "7000",
      currentDate: new Date("12/26/2022"),
    },
    {
      id: "exp3",
      title: "Vegetable Buy",
      price: "100",
      currentDate: new Date("05/05/1990"),
    },
    {
      id:"exp4",
      title:"Mobile Recharge",
      price:"50",
      currentDate:new Date("05/05/2010"),
    }
  ];
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
