import React from 'react';
import { Accordion, Container, Stack, Alert, Button, ButtonGroup } from 'react-bootstrap';
import Filter from '../components/Filter/Filter';


const Users = () => {
    return (
            <Container>
            <Alert variant='info' style={{marginTop: '2rem'}}>
                <Alert.Heading>
                    Команды Timmy
                </Alert.Heading>
                <p>
                    Здесь Вы можете посмотреть весь список команд.
                </p>
                <hr />
                <p className='mb-0'>
                    Скоро будет новая функция - Фильтрация по разделам
                </p>
            </Alert>

            <ButtonGroup vertical size='sm' className='mb-10' style={{width: 'inherit'}}>
                <Button variant='outline-success'>Управление Ботом</Button>
                <Button variant='outline-success'>Экономика</Button>
                <Button variant='outline-success'>Музыка</Button>
                <Button variant='outline-success'>Префикс</Button>
                <Button variant='outline-success'>Модерация</Button>
                <Button variant='outline-success'>Уровни</Button>
                <Button variant='outline-success'>Действия</Button>
                <Button variant='outline-success'>Информационные</Button>
                <Button variant='outline-success'>Разное</Button>
                <Button variant='outline-success'>Защита</Button>
                <Button variant='outline-success'>Логи</Button>
                <Button variant='outline-success'>Верификация</Button>
            </ButtonGroup>

                <Accordion variant='dark' className='mb-2' style={{marginTop: '2rem'}} alwaysOpen>
                    <Stack gap={2}>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>
                                <strong>баланс</strong> - проверка баланса участника
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Timmy показывает пользователю баланс кошелька и банковского счёта</p>
                           <p><strong>Использование:</strong></p>
                           <p>!баланс</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>
                                <strong>депозит</strong> - положить деньги на банковский счёт
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Команда для пополнения счёта в банке</p>
                           <p><strong>Использование:</strong></p>
                           <p>!депозит [кол-во]</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>
                                <strong>снять</strong> - снять деньги с банковского счёта
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Команда для снятия средств в банке</p>
                           <p><strong>Использование:</strong></p>
                           <p>!снять [кол-во]</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>
                                <strong>перевести</strong> - перевод средств другому участнику
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Команда для перевода средств другому участнику сервера. Перевод осуществляется передачей средств со своего кошелька на другой.</p>
                           <p><strong>Использование:</strong></p>
                           <p>!перевести [@] [кол-во]</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='4'>
                        <Accordion.Header>
                                <strong>повысить-депозит</strong> - повышение средств в банке
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Команда повышает Ваше количество денег в банке по процентному соотношению <strong>10%</strong></p>
                           <p><strong>Использование:</strong></p>
                           <p>!повысить-депозит</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='5'>
                        <Accordion.Header>
                                <strong>бонус</strong> - получение бонуса
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Команда выдаёт ежедневный бонус</p>
                           <p><strong>Использование:</strong></p>
                           <p>!бонус</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='6'>
                        <Accordion.Header>
                                <strong>работать</strong> - рабочая смена
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Команда отправляет Вас на работу и выдаёт деньги</p>
                           <p><strong>Использование:</strong></p>
                           <p>!работать</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='7'>
                        <Accordion.Header>
                                <strong>питомцы</strong> - информация о питомцах
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Команда показывает количество питомцев которые у Вас имеются</p>
                           <p><strong>Использование:</strong></p>
                           <p>!питомцы</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='8'>
                        <Accordion.Header>
                                <strong>магазин-питомцев</strong> - магазин
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Команда открывает меню покупки питомцев</p>
                           <p><strong>Использование:</strong></p>
                           <p>!магазин-питомцев [тип(1-4)] [кол-во]</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='9'>
                        <Accordion.Header>
                                <strong>бой</strong> - бой питомцев
                        </Accordion.Header>
                        <Accordion.Body>
                           <p>Команда отправляет Ваших питомцев на бой</p>
                           <p><strong>Уровни сложности:</strong></p>
                           <p>1. Лёгкий</p>
                           <p>2. Средний</p>
                           <p>3. Сложный</p>
                           <p><strong>Использование:</strong></p>
                           <p>!бой [1-3]</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Stack>
                </Accordion>                
            </Container>
    );
};

export default Users;