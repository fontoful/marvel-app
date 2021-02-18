import { useEffect, useState } from 'react'
import {
  Col,
  Container,
  Spinner,
  Row,
  Card,
  Button,
  ButtonGroup,
} from 'react-bootstrap'

// components
import Navigation from '../components/Navigation'

//services
import { url } from '../services'
import { unifyString } from '../utils/helper'

//interfaces
import { IResponseAPI, IResultProps } from '../types/APItypes'
import { Link } from 'react-router-dom'

const Comics: React.FC = () => {
  const [comics, setComics] = useState<IResultProps[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    try {
      const fetchComicData = async () => {
        const resResults = await fetch(url('comics'))
        const {
          data: { results },
        }: IResponseAPI = await resResults.json()

        setComics(results)
        setLoading(false)
      }

      fetchComicData()
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  return (
    <Container>
      <Navigation liText='characters' bookmarks={true} />
      <Row style={{ margin: 'auto' }}>
        {loading ? (
          <div className='mx-auto mt-5'>
            <Spinner animation='border' />
          </div>
        ) : (
          <Col className='grid'>
            {comics.map((char: IResultProps) => (
              <Card key={char.id}>
                <Card.Img variant='top' src={unifyString(char.thumbnail)} />
                <Card.Body>
                  <Card.Title>{char.title}</Card.Title>
                  <ButtonGroup>
                    <Link to={`/comics/${char.id}`}>
                      <Button className='mr-2' variant='info'>
                        View it
                      </Button>
                    </Link>
                    <Button variant='danger'>Bookmark it</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            ))}
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Comics
