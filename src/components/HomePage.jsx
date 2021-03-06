import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Slider from './Slider';
import suport from './images/support1.jpg'
import hour from './images/24h.jpg'
import call from './images/Support.png'

const HomePage = () => {
    return (
        <div>
        <Slider />
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>


            <h1 style={{justifyContent: 'center', paddingTop: '2rem', paddingBottom: '2rem', display: 'flex'}}>Преимущества Бота</h1>
            <CardGroup style={{display: 'flex'}}>
                <Card style={{width: '20rem', justifyContent: 'center'}}>
                    <Card.Img variant='top' src={suport} />
                    <Card.Body>
                        <Card.Title>
                            Бот в сети 24/7
                        </Card.Title>
                        <Card.Text>
                            Timmy показывает ежедневную, стабильную, бесперебойную работу.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{width: '20rem' , justifyContent: 'center', display: 'flex'}}>
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
                </CardGroup>


                <h1 style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem'}}>Ссылки</h1>
                <CardGroup style={{display: 'flex'}}>
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
                    </CardGroup>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col md={5} style={{display: 'flex'}}>
                    <img src={suport} height={400} />
                </Col>
                <Col md={6}>
                    <h2 style={{justifyContent: 'center', display: 'flex'}}>Информация о Timmy</h2>
                    <p style={{justifyContent: 'center', display: 'flex'}}>
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