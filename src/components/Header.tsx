// Assets importing
import { Link } from 'react-router-dom'
import Logo from '../assets/marvel.svg'

// import css

export const Header: React.FC = () => {
  return (
    <header>
      <div className='logo mx-auto'>
        <Link to='/'>
          <img src={Logo} alt='Marvel Logo' />
        </Link>
      </div>
    </header>
  )
}
