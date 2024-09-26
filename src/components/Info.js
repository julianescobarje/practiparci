import './Info.css'
import { useNavigate } from 'react-router-dom'

function Info({ user }) {
  const { pfp, username, fullname, bio, web, numPosts, followers, following } =
    user

  const navigate = useNavigate()

  const handleProfileClick = () => {
    navigate('/profile-detail')
  }

  return (
    <div className='main-container'>
      <div className='img-container'>
        <img
          src={pfp}
          className='pfp-img'
          alt='Profile'
          onClick={handleProfileClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className='info-container'>
        <h1>{username}</h1>
        <p className='fullname'>{fullname}</p>
        <p>{bio}</p>
        <a href={web} target='noblank' rel='noopener noreferrer'>
          {web}
        </a>
        <div className='stats-container'>
          <p>
            <span>{numPosts}</span> posts
          </p>
          <p>
            <span>{followers}</span> followers
          </p>
          <p>
            <span>{following}</span> following
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info
