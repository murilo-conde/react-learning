import ExpenseItemList from "./components/Expenses/ExpenseItemList";

const App = () => {
  let expenses = [
    {key: "asdghaspid", name: "Seguro do carro", date: new Date(2022, 1, 18), value: 2156.0},
    {key: "asdas", name: "Ifood", date: new Date(2022, 1, 18), value: 86.0},
  ];

  return (
    <div>
      <ExpenseItemList expenses={expenses}/>
    </div>
  );
}

export default App;
