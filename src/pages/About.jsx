import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import hour from '../components/Slider/24h.jpg'
import help from '../components/Slider/support1.jpg'
import call from '../components/Slider/Support.png'


const About = () => {
    return (
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row>
            <h1 style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem'}}>Преимущества Бота</h1>
            <Col>
                <Card style={{width: '20rem'}}>
                    <Card.Img variant='top' src={help} />
                    <Card.Body>
                        <Card.Title>
                            Бот в сети 24/7
                        </Card.Title>
                        <Card.Text>
                            Timmy показывает ежедневную, стабильную, бесперебойную работу.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{width: '20rem'}}>
                    <Card.Img variant='top' src={call} />
                    <Card.Body>
                        <Card.Title>
                            Связь с разработчиком
                        </Card.Title>
                        <Card.Text>
                            Вы всегда можете обратиться за помощью или предложением по улучшению к Ведущему Разработчику Бота.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{width: '20rem'}}>
                    <Card.Img variant='top' src={hour} />
                    <Card.Body>
                        <Card.Title>
                            Многофункциональность
                        </Card.Title>
                        <Card.Text>
                            Бот имеет большое спектр полезных функций.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};

export default About;