import { useContext, useEffect, useState } from 'react'
import { Col, Container, Spinner, Row, Card, Button } from 'react-bootstrap'

// components
import Navigation from '../components/Navigation'

// context
import { GlobalContext } from '../context/GlobalContext'

//services
import { url } from '../services'
import { unifyString } from '../utils/helper'

//interfaces
import { IResponseAPI, IResultProps } from '../types/APItypes'
import { useHistory } from 'react-router-dom'

const Comics: React.FC = () => {
  const [comics, setComics] = useState<IResultProps[]>([])
  const [loading, setLoading] = useState(false)
  const { push } = useHistory()

  const {
    comicsBookmarks,
    addComicToBookmarks,
    removeComicFromBookmarks,
  } = useContext(GlobalContext)

  const checkBookmarkValidity = (id: number) => {
    const found = comicsBookmarks.find((comic: IResultProps) => comic.id === id)

    if (found) {
      return true
    } else {
      return false
    }
  }

  const bookMarkHandler = (comic: IResultProps) => {
    const found = comicsBookmarks.find(
      (comicObj: IResultProps) => comicObj.id === comic.id,
    )

    if (found) {
      return removeComicFromBookmarks(comic.id)
    } else {
      addComicToBookmarks(comic)
    }
  }

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
                  <Card.Title>
                    {char.title}{' '}
                    <i
                      onClick={() => bookMarkHandler(char)}
                      className={
                        checkBookmarkValidity(char.id)
                          ? 'fas fa-bookmark'
                          : 'far fa-bookmark'
                      }
                    />
                  </Card.Title>
                  <Button
                    onClick={() => push(`/comics/${char.id}`)}
                    variant='outline-info'
                  >
                    View it
                  </Button>
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
