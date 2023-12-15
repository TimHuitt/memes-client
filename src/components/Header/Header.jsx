import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <div className="links">
        <div className="links-left">
          <Link to="/" className='nav-link'>
            <div className="browse btn">
              Browse
            </div>
          </Link>
          <Link to="/create" className='nav-link'>
            <div className="create btn">
              Create
            </div>
          </Link>
        </div>
        <div className="links-right">
          <Link to="/saved" className='nav-link'>
            <div className="saved btn">
              Saved
            </div>
          </Link>
          {/* <Link to="/create" className='nav-link'> */}
            <div className="user-icon">
              User
            </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Header

