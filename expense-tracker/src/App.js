import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">       
        <a href='#'>
          Expense tracker
        </a>
        <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
