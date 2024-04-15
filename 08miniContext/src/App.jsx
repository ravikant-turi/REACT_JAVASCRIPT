import { useState } from 'react'
import UserCotextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserCotextProvider>
      <h1>React with chai and code .......</h1>
      <Login/>
      <Profile/>
     </UserCotextProvider>
  )
}

export default App
