import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// React Bootstrap
import {
  Row,
  Button,
  Card,
  Container,
  Jumbotron,
  Spinner,
} from 'react-bootstrap'

// services
import { url } from '../services'
import { IResponseAPI, IResultProps } from '../types/APItypes'
import { unifyString } from '../utils/helper'

const Comic: React.FC = () => {
  const [comic, setComic] = useState<IResultProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { id }: { id: string | undefined } = useParams()

  useEffect(() => {
    setLoading(true)
    try {
      const fetchComicId = async () => {
        const resResults = await fetch(url(`/comics/${id}`))
        const {
          data: { results },
        }: IResponseAPI = await resResults.json()
        setComic(results)
        setLoading(false)
      }

      fetchComicId()
    } catch (error) {
      console.log(error)
    }
  }, [id])

  const [myComic] = comic

  return loading ? (
    <Row style={{ margin: 'auto' }}>
      <div className='mx-auto mt-5'>
        <Spinner animation='border' />
      </div>
    </Row>
  ) : comic.length > 0 ? (
    <Jumbotron fluid>
      <Container>
        <div className='flex'>
          <Card style={{ width: '30rem' }}>
            <Card.Img
              style={{ width: '30rem' }}
              variant='top'
              src={unifyString(myComic.thumbnail)}
            />
            <Card.Body>
              <Card.Title>{myComic.title}</Card.Title>
              <Card.Text>{myComic.description}</Card.Text>
            </Card.Body>
          </Card>

          <div className='characters'>
            <h1>Characters</h1>
            <nav>
              <ul>
                {myComic.characters.items.map((char: IResultProps) => (
                  <li key={char.name}>{char.name}</li>
                ))}
              </ul>
            </nav>

            <Link to='/comics'>
              <Button variant='danger'>Go Back</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Jumbotron>
  ) : null
}

export default Comic
