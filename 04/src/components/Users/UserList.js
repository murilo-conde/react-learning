import Card from "../UI/Card"

import styles from './UserList.module.css'

const UserList = ({users}) => {
  return (
    <Card className={styles.card}>
      <ul>
        {users.length === 0 && <li>No users found.</li>}
        {users.map(user => <li>
          {user.username.toUpperCase()} ({user.age} years old)
        </li>)}
      </ul>
    </Card>
  )
}

export default UserList