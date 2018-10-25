//snippet rce
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: 'Paul',
          company: 'Inti',
          description: 'Lecturer'
        },
        {
          id: 2,
          name: 'Lim',
          company: 'Intel',
          description: 'Programmer'
        },
        {
          id: 3,
          name: 'Ahmed',
          company: 'Flex',
          description: 'Engineer'
        },
        {
          id: 4,
          name: 'Kathy',
          company: 'Motorola',
          description: 'Engineer'
        }
      ]
    };
  }

  removePerson(id) {
    // this.setState({
    //   people: this.state.people.filter(person => person.id !== id)
    // });
    this.setState({
      people: this.state.people.filter(person => {
        if (person.id !== id) return person;
      })
    });
  }

  render() {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="4" key={person.id}>
          <PeopleCard
            removePerson={this.removePerson.bind(this)}
            person={person}
          />
        </Col>
      );
    });
    return (
      <Container>
        <Row>{peopleCards}</Row>
      </Container>
    );
  }
}

export default MainArea;
