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

  const {
    addCharToBookmarks,
    characterBookmarks,
    removeCharFromBookmarks,
  } = useContext(GlobalContext)

  const checkBookmarkValidity = (id: number) => {
    const found = characterBookmarks.find(
      (character: IResultProps) => character.id === id,
    )

    if (found) {
      return true
    } else {
      return false
    }
  }

  const bookMarkHandler = (char: IResultProps) => {
    const found = characterBookmarks.find(
      (character: IResultProps) => character.id === char.id,
    )

    if (found) {
      return removeCharFromBookmarks(char.id)
    } else {
      return addCharToBookmarks(char)
    }
  }

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
                      <i
                        onClick={() => bookMarkHandler(char)}
                        className={
                          checkBookmarkValidity(char.id)
                            ? 'fas fa-bookmark'
                            : 'far fa-bookmark'
                        }
                      />
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
