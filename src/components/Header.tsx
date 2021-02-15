// Assets importing
// import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/marvel.svg'

// import css

export const Header: React.FC = () => {
  // const [params, setParams] = useState<any>({})
  // const [key, setKey] = useState('name')

  // const inputRef = useRef<HTMLInputElement>(null)

  // console.log(params)
  // console.log(key)

  // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setParams((prevState: any) => ({
  //     ...prevState,
  //     [key]: e.target.value,
  //   }))
  // }

  return (
    <header>
      <div className='logo mx-auto'>
        <Link to='/'>
          <img src={Logo} alt='Marvel Logo' />
        </Link>

        {/* <div>
          <input type='text' ref={inputRef} onChange={onChangeHandler} />
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setKey(e.target.value)
            }
          >
            <option>name</option>
            <option>comic</option>
          </select>
        </div> */}
      </div>
    </header>
  )
}
