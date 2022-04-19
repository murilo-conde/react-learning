import ExpenseItem from "./components/ExpenseItem";

function App() {
  const date = new Date(2022, 1, 18);

  return (
    <div>
      <ExpenseItem date={date} name="Seguro do carro" value={2156.00} />
      <ExpenseItem date={date} name="Ifood" value={86.00} />
    </div>
  );
}

export default App;
