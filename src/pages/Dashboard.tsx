import { Link } from 'react-router-dom'

const Dashboard: React.FC = () => {
  return (
    <div className='bg-hero'>
      <nav>
        <ul>
          <Link to='/characters'>
            <li>Characters</li>
          </Link>
          <Link to='/comics'>
            <li>Comics</li>
          </Link>
          <Link to='/bookmarks'>
            <li>Bookmarks</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Dashboard
