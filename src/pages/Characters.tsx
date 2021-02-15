import { useEffect, useState } from 'react'

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
      <Row>
        {loading ? (
          <div className='mx-auto mt-5'>
            <Spinner animation='border' />
          </div>
        ) : (
          <Row>
            <Col>
              {characters.map((char: IResultProps) => (
                <Card key={char.id}>
                  <Card.Img src={unifyString(char.thumbnail)} />
                  <Card.Body>
                    <Card.Title>Quick Test</Card.Title>
                  </Card.Body>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi corrupti unde similique dicta modi veniam vel debitis
                    sunt iste incidunt.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
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
