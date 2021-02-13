import { useEffect, useState } from 'react'

// React Bootstrap
import { Col, Container, Row, Spinner } from 'react-bootstrap'

// utils
import { url } from '../services'
//TODO do something
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
          <Col>
            <ul>
              {characters.map((char: IResultProps) => (
                <li key={char.id}>{char.name}</li>
              ))}
            </ul>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Characters
