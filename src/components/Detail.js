import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Detail.css'

function Detail({ user, submit }) {
  const navigate = useNavigate()

  const [edit, setEdit] = useState({ ...user })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEdit({
      ...edit,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(edit)
    navigate('/')
  }

  const { pfp } = user

  return (
    <div className="outer-container">
      <div className="detail-container">
        <img src={pfp}></img>
        <form
          onSubmit={handleSubmit}
        >
          <label>Nombre de usuario</label>
          <input
            type='text'
            name='username'
            value={edit.username}
            onChange={handleInputChange}
            placeholder='Username'
          />
          <label>Nombre completo</label>
          <input
            type='text'
            name='fullname'
            value={edit.fullname}
            onChange={handleInputChange}
            placeholder='Fullname'
          />
          <label>Descripción del perfil</label>
          <input
            type='text'
            name='bio'
            value={edit.bio}
            onChange={handleInputChange}
            placeholder='Bio'
          />

          <label>URL página personal</label>
          <input
            type='text'
            name='web'
            value={edit.web}
            onChange={handleInputChange}
            placeholder='Website'
          />
          <input type='submit' value='Guardar cambios' />
        </form>
      </div>
    </div>
  )
}

export default Detail
