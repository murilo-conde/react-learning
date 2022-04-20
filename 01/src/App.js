import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/NewExpenses/NewExpense";
import {useState} from "react";

const defaultExpenses = [
  {key: "asdghaspid", title: "Seguro do carro", date: new Date(2022, 1, 18), amount: 2156.0},
  {key: "asdas", title: "Ifood", date: new Date(2022, 1, 18), amount: 86.0},
];

const App = () => {

  const [expenses, setExpenses] = useState(defaultExpenses)

  const addExpenseHandler = (data) => {
    setExpenses((prev) => {
      return [...prev, data]
    })
  }

  return (
    <div>
      <NewExpense onAddExpanse={addExpenseHandler}/>
      <ExpenseItemList expenses={expenses}/>
    </div>
  );
}

export default App;
