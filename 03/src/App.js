import AddUser from "./components/Users/AddUser"
import UserList from "./components/Users/UserList"
import {useState} from "react"

function App() {
  const [users, setUsers] = useState([])

  const onUserAdd = (data) => {
    setUsers((prev) => [
      ...prev,
      data
    ])
  }

  return (
    <div>
      <AddUser onUserAdd={onUserAdd}/>
      <UserList users={users}/>
    </div>
  )
}

export default App
