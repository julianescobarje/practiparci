import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2lr-9VNKrMEkSZiOhsM88cGxvvLmOZ_j4g&s',
    username: 'julianescobarje',
    fullname: 'Julian Escobar Rivera',
    bio: 'Unico y diferente',
    web: 'https://www.senderistasmanzanares.com.co',
    numPosts: 8,
    followers: 0,
    following: 0,
  })

  const updateUser = (newUser) => {
    setUser(newUser)
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route
            path='/profile-detail'
            element={<Detail user={user} submit={updateUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
