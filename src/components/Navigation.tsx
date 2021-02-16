import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { capitalize } from '../utils/helper'

interface INavigationsProps {
  liText: string
  bookmarks?: boolean
}

const Navigation: React.FC<INavigationsProps> = ({ liText, bookmarks }) => {
  return (
    <Nav className='justify-content-center align-items-center'>
      <ul className='myNav'>
        <Link to='/'>
          <li>Dashboard</li>
        </Link>
        <Link to={`/${liText}`}>
          <li>{capitalize(liText)}</li>
        </Link>
        {bookmarks && (
          <Link to='/bookmarks'>
            <li>Bookmarks</li>
          </Link>
        )}
      </ul>
    </Nav>
  )
}

export default Navigation
