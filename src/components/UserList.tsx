// src/components/UserList.tsx
import { useFetch } from '../hooks/useFetch'

type User = {
  id: number
  name: string
  email: string
}

export default function UserList() {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

  if (loading) return <p>در حال بارگذاری...</p>
  if (error) return <p>❌ {error}</p>

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  )
}