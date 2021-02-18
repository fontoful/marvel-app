import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

//React Bootstrap
import { Button, Card, Container, Jumbotron } from 'react-bootstrap'

// services
import { url } from '../services'
import { IResponseAPI, IResultProps } from '../types/APItypes'
import { unifyString } from '../utils/helper'

const Character: React.FC = () => {
  const [character, setCharacter] = useState<IResultProps[]>([])
  const [loading, setLoading] = useState(false)

  const { id }: { id: string | undefined } = useParams()

  useEffect(() => {
    setLoading(true)
    try {
      const fetchCharId = async () => {
        const resResults = await fetch(url(`/characters/${id}`))
        const {
          data: { results },
        }: IResponseAPI = await resResults.json()

        setCharacter(results)
      }

      fetchCharId()
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [id])

  // Grab first one
  const [myCharacter] = character

  // return character.length > 0 ? <h1>{myCharacter.name}</h1> : null
  return character.length > 0 ? (
    <Jumbotron fluid>
      <Container>
        <div className='flex'>
          <Card style={{ width: '30rem' }}>
            <Card.Img
              style={{ width: '30rem' }}
              variant='top'
              src={unifyString(myCharacter.thumbnail)}
            />
            <Card.Body>
              <Card.Title>{myCharacter.name}</Card.Title>
              <Card.Text>{myCharacter.description}</Card.Text>
            </Card.Body>
          </Card>

          <div className='comics'>
            <h1>comics ↕ </h1>
            <nav>
              <ul>
                {myCharacter.comics.items.map(comic => (
                  <li key={comic.name}>{comic.name}</li>
                ))}
              </ul>
            </nav>

            <Link to='/characters'>
              <Button variant='danger'>Go Back</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Jumbotron>
  ) : null
}

export default Character
