import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header">
      <div className="links-left">
        <Link to="/browse">
          Browse
        </Link>
        <Link to="/create">
          Create
        </Link>
      </div>
    </div>
  )
}

export default Header