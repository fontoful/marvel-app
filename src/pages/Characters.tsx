import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

// React Bootstrap
import { Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap'

//context
import { GlobalContext } from '../context/GlobalContext'

// utils
import { url } from '../services'
import { unifyString } from '../utils/helper'

// types & interfaces
import { IResponseAPI, IResultProps } from '../types/APItypes'

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<IResultProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { addCharToBookmarks } = useContext(GlobalContext)

  useEffect(() => {
    setLoading(true)
    try {
      const fetchCharData = async () => {
        const resResults = await fetch(url('characters'))
        const {
          data: { results },
        }: IResponseAPI = await resResults.json()

        setCharacters(results)
        setLoading(false)
      }

      fetchCharData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Container>
      <Navigation liText='comics' bookmarks={true} />
      <Row style={{ margin: 'auto' }}>
        {loading ? (
          <div className='mx-auto mt-5'>
            <Spinner animation='border' />
          </div>
        ) : (
          <Col>
            <div className='grid'>
              {characters.map((char: IResultProps) => (
                <Card style={{ cursor: 'pointer' }} key={char.id}>
                  <Card.Img src={unifyString(char.thumbnail)} />
                  <Card.Body>
                    <Card.Title>
                      {char.name}
                      <button onClick={() => addCharToBookmarks(char)}>
                        <i className='far fa-heart' />
                      </button>
                    </Card.Title>
                    <Link to={`/characters/${char.id}`}>
                      <Button variant='outline-info'>View it</Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Characters
