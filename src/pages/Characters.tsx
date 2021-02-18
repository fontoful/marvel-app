import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

// React Bootstrap
import {
  Card,
  Col,
  Container,
  Row,
  Spinner,
  Button,
  ButtonGroup,
} from 'react-bootstrap'

// utils
import { url } from '../services'
import { unifyString } from '../utils/helper'

// types & interfaces
import { IResponseAPI, IResultProps } from '../types/APItypes'

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<IResultProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

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
                    <Card.Title>{char.name}</Card.Title>
                    <ButtonGroup>
                      <Link to={`/characters/${char.id}`}>
                        <Button className='mr-2' variant='info'>
                          View it
                        </Button>
                      </Link>

                      <Button variant='danger'>Bookmark it</Button>
                    </ButtonGroup>
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
