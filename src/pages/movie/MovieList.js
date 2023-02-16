import { useEffect, useState } from 'react';
// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

const movieAPI = 'https://api.themoviedb.org/3/movie/now_playing?api_key=22a13ed5b5f8ba5245a8392fcc099e53&language=ko&&page=1';
const moviePosterImgUrl = 'https://www.themoviedb.org/t/p/w440_and_h660_face/';

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const requestOptions = {
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };

  const getMovies = async () => {
    await fetch(movieAPI, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  };

  // 컴포넌트가 Mount되자마자 getData함수를 호출
  // 빈배열을 전달해야 Mount시점에만 실행
  useEffect(() => {
    getMovies();
  }, []);

  // const MAX_POSSIBLE_HEIGHT = 150;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading
        ? <div className="text-center"><h1>Loading...</h1></div>
        : (
          <Container fluid>
            <Row>
              {
                movies.map((movie, key) => {
                  return (
                    <Col lg="3" sm="6">
                      <Card className="card-stats" >
                        <Card.Img variant="top" src={moviePosterImgUrl + movie.poster_path} />
                        <Card.Body>
                          <Row className="justify-content-end">
                            {/* <Col >
                          <div className="icon-big text-center ">
                            <Card.Text>
                              <div className="inner" style={{ maxHeight: MAX_POSSIBLE_HEIGHT }}>{movie.overview ? movie.overview : ''}</div>
                            </Card.Text>
                          </div>
                        </Col> */}
                            <Col xs="7">
                              <div className="numbers">
                                <p className="card-category">{movie.vote_average + '%'}</p>
                                <Card.Title>{movie.release_date}</Card.Title>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                        <Card.Footer>
                          <hr></hr>
                          <div className="stats">
                            <i className={movie.adult ? 'fas mr-1 text-danger' : 'fas mr-1 text-black-50'}>19</i>
                            {movie.title}
                          </div>
                        </Card.Footer>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
            <Row className="d-flex justify-content-center">
              <Button variant="outline-secondary">더보기</Button>
            </Row>
          </Container>
        )
      }
    </>
  )
}

export default MovieList;
