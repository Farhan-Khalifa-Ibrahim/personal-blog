import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/App.css";
class App extends React.Component {
  render() {
    return (
      <body>
        <Container fluid="md" className="container">
          <Row>
            <Col>About Me</Col>
          </Row>
        </Container>
        <Container fluid="md" className="inside">
          <Row>
            <Col md="6">
              Hi everyone welcome to my blog, my name is Farhan Khalifa Ibrahim.
              I will be sharing about books and software engineer here. I am
              still a newbie in many things around software engineer that is why
              I would like to invite you to have a slack group for us to discuss
              software engineer, you can share information or ask questions.
              This group will be focusing on five aspects (Frontend, Backend,
              Mobile Development, Data Structures and Algorithm, System Design).
              If you are interested, you can fill the form in
              <a href="https://forms.gle/qZMRF3JwDs7J9rih8">here</a>. I will not
              accept randomly, although we know each other.
              <br />
              <br />I want to have a group because I believe that everyone has
              their own strength in software engineering, and with this group, I
              hope you can find a friend who understands your questions very
              well. From my own personal problem, I have a very close mentor who
              already experienced in programming for almost four years. Still,
              there are many things he doesn't know about because the stack he
              uses is different from my questions. Also, I am more comfortable
              asking a person if I know him very well, or else I would better
              ask in a forum such as slack group.
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}

export default App;
