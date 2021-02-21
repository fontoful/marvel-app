import { useContext } from 'react'

// Components
import Navigation from '../components/Navigation'

// React Boostsrap
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

// Context
import { GlobalContext } from '../context/GlobalContext'

// Types
import { IResultProps } from '../types/APItypes'

// Utils & helpers
import { unifyString } from '../utils/helper'
import { Link } from 'react-router-dom'

const Bookmarks: React.FC = () => {
  const {
    characterBookmarks,
    comicsBookmarks,
    removeCharFromBookmarks,
    addCharToBookmarks,
    addComicToBookmarks,
    removeComicFromBookmarks,
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

  const checkComicValidity = (id: number) => {
    const found = comicsBookmarks.find((comic: IResultProps) => comic.id === id)

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

  const comicBookmarkHandler = (comic: IResultProps) => {
    const found = comicsBookmarks.find(
      (character: IResultProps) => character.id === comic.id,
    )

    if (found) {
      return removeComicFromBookmarks(comic.id)
    } else {
      return addComicToBookmarks(comic)
    }
  }

  // Merge the two arrays
  // const mergedArray: IResultProps[] = [
  //   ...characterBookmarks,
  //   ...comicsBookmarks,
  // ]

  return (
    <Container>
      <Navigation liText='comics' />
      <Row>
        {!(characterBookmarks.length > 0 || comicsBookmarks.length > 0) ? (
          <h1>
            No Bookmarks added yet <i className='far fa-folder-open'></i>
          </h1>
        ) : (
          <Col>
            <h1 className='bookmarks-header'>
              Find your Bookmarks here{' '}
              <i className='fas fa-arrow-circle-down'></i>
            </h1>
            <div className='grid'>
              {characterBookmarks.map((char: IResultProps) => (
                <Card key={char.id}>
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
              {comicsBookmarks.map((comic: IResultProps) => (
                <Card key={comic.id}>
                  <Card.Img src={unifyString(comic.thumbnail)} />
                  <Card.Body>
                    <Card.Title>
                      {comic.title}
                      <i
                        onClick={() => comicBookmarkHandler(comic)}
                        className={
                          checkComicValidity(comic.id)
                            ? 'fas fa-bookmark'
                            : 'far fa-bookmark'
                        }
                      />
                    </Card.Title>
                    <Link to={`/comics/${comic.id}`}>
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

export default Bookmarks
