import { useEffect, useContext, useState } from 'react'

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
  const { characterBookmarks, comicsBookmarks } = useContext(GlobalContext)

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
            <h1>
              Find your Bookmarks here{' '}
              <i className='fas fa-arrow-circle-down'></i>
            </h1>
            <div className='grid'>
              {characterBookmarks.map((char: IResultProps) => (
                <Card>
                  <Card.Img src={unifyString(char.thumbnail)} />
                  <Card.Body>
                    <Card.Title>{char.name}</Card.Title>
                    <Link to={`/characters/${char.id}`}>
                      <Button variant='outline-info'>View it</Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
              {comicsBookmarks.map((comic: IResultProps) => (
                <Card>
                  <Card.Img src={unifyString(comic.thumbnail)} />
                  <Card.Body>
                    <Card.Title>{comic.title}</Card.Title>
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
