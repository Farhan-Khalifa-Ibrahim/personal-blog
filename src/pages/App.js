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
              Hi everyone welcome to my blog,my name is Farhan Khalifa Ibrahim.
              I will be sharing about books and software in here. I am still a
              newbie in many things around software engineer that is why I would
              like to invite you to have slack group for us to discuss about
              software engineer, you can share informations or ask questions.
              This group will be focusing on 5 aspects (Frontend, Backend,
              Mobile, Data Structure and Algorithm, System Design). If you are
              interested you can fill the form in
              <a href="https://forms.gle/qZMRF3JwDs7J9rih8">here</a>. I will
              only invite you if I know you personally, or you are a friend of
              my friend (This is to prevent any toxic members).
              <br />
              <br />
              The reason why I want to have a group is that because I believe
              that everyone has their strength in software engineer, and with
              this group I hope that you can find a master who understands very
              well about your questions. from my own personal problem, I have a
              very close mentor who already experienced in programming for
              almost four years, and still there are many things he doesn't know
              about usually because the stack he use is different from my
              question. Also for me, I am more comfortable to ask a person if I
              know him very well or else I would better ask in a forum.
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}

export default App;
