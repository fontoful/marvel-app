import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'

// React Bootstrap
import { Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap'

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
      <Row>
        {loading ? (
          <div className='mx-auto mt-5'>
            <Spinner animation='border' />
          </div>
        ) : (
          <Row style={{ margin: 'auto' }}>
            <Col className='grid'>
              {characters.map((char: IResultProps) => (
                <Card key={char.id}>
                  <Card.Img src={unifyString(char.thumbnail)} />
                  <Card.Body>
                    <Card.Title>{char.name}</Card.Title>
                    <Button
                      onClick={() => console.log('button click')}
                      variant='primary'
                    >
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        )}
      </Row>
    </Container>
  )
}

export default Characters
