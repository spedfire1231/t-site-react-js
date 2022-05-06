import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import suport from '../Slider/support1.jpg'

const HomePage = () => {
    return (
        <div>
        <Slider />
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <h1 style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem'}}>Ссылки</h1>
                <Col>
                    <Card style={{width: '20rem'}}>
                        <Card.Img variant='top' src={suport} />
                        <Card.Body>
                            <Card.Title>
                                Timmy
                            </Card.Title>
                            <Card.Text>
                                Вы можете пригласить Timmy на свой сервер нажав кнопку ниже.
                            </Card.Text>
                            <Button href="https://discord.com/api/oauth2/authorize?client_id=938854797690417283&permissions=1341061033078&scope=bot%20applications.commands" target='_blank' variant='success'>Пригласить</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '20rem'}}>
                        <Card.Img variant='top' src={suport} />
                        <Card.Body>
                            <Card.Title>
                                Timmy
                            </Card.Title>
                            <Card.Text>
                                Войти на сервер поддержки бота.
                            </Card.Text>
                                <Button href='https://discord.gg/6PFKbRfkSy' target='_blank'>Войти</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '20rem'}}>
                        <Card.Img variant='top' src={suport} />
                        <Card.Body>
                            <Card.Title>
                                Timmy
                            </Card.Title>
                            <Card.Text>
                                Связь с разработчиком в <strong>Telegram</strong>
                            </Card.Text>
                            <Button href='https://t.me/alexthunder121' target='_blank'>Перейти</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col md={5}>
                    <img src={suport} height={400} />
                </Col>
                <Col md={6}>
                    <h2>Информация о Timmy</h2>
                    <p>
                        Timmy - Многофункциональный бот в Discord который всегда поможет Вашему серверу.
                        Тимми имеет много различных команд от системы модерации до Музыкальной. Уровни чатинга и многое другое.
                        Бот доступен 24/7 не смотря на погоду или время суток. Разработчик всегда ответит на Ваши вопросы.
                        Именно Вы можете в любой момент добавить Бота к себе на сервер и я Вас уверяю. ВЫ НЕ ПОЖАЛЕЕТЕ!
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default HomePage;