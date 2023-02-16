import React from 'react';

import {
  Table,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import data from "../data/posts.json";

function PostList() {

  const posts = data.posts;
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Post List</Card.Title>
                <p className="card-category">
                  Sample List
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">제목</th>
                      <th className="border-0">내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((data, key) => {
                      return (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.title}</td>
                          <td>{data.content}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default PostList;