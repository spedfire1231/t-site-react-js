import React, { useMemo, useState } from 'react';
import { Container, Accordion, Button, Alert, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { commandnames } from '../components/commandnames';
import MyInput from './UI/input/MyInput'

const SearchByName = () => {

    const [value, setValue] = useState('')

    const [items, setItems] = useState(commandnames)

    const filteredItems = useMemo(() => {
        return items.filter(item => item.title.includes(value))
    }, [value])
    
    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    if (!filteredItems.length) {
        return (
        <Container>
        <Alert variant='info' style={{marginTop: '2rem'}}>
        <Alert.Heading>
            Команды Timmy
        </Alert.Heading>
        <p>
            Здесь Вы можете посмотреть список команд по названию команды.
        </p>
        <hr />
        <p className='mb-0'>
        <li>Стандартный префикс бота - !</li>
        </p>
        <p><li>Всего команд - <strong>56</strong></li></p>
    </Alert>
        <MyInput type='text' value={value} onChange={onChangeValue} placeholder='Поиск по названию...' style={{display: 'flex', marginTop: '2rem'}}/>
        <Button variant='info' href='/category' size='sm' style={{width: 'auto', justifyContent: 'center', marginTop: '2rem', marginLeft: '15px'}}>Перейти к поиску по разделам</Button>
        <h3 style={{textAlign: 'center', marginTop: '2rem'}}>
        По данному запросу не было найдено ни одной команды!
        </h3>
        </Container>
        )
    }

    return (
        <Container>
        <Alert variant='info' style={{marginTop: '2rem'}}>
        <Alert.Heading>
            Команды Timmy
        </Alert.Heading>
        <p>
            Здесь Вы можете посмотреть список команд по названию команды.
        </p>
        <hr />
        <p className='mb-0'>
        <li>Стандартный префикс бота - !</li>
        </p>
        <p><li>Всего команд - <strong>56</strong></li></p>
        </Alert>
            <MyInput type='text' value={value} onChange={onChangeValue} placeholder='Поиск по названию...' style={{display: 'flex', marginTop: '2rem'}}/>
            <Nav.Link>
                    <Button variant='info' size='sm' style={{width: 'auto', height: '35px', justifyContent: 'center', display: 'flex'}}><Link to='/category' style={{color: 'black', textDecoration: 'none'}}>Перейти к разделу поиска по категориям</Link></Button>
            </Nav.Link>
            <Container>
            <Accordion className='mb-2' alwaysOpen style={{width: 'auto', height: 'auto', marginTop: '2rem'}}>
                {filteredItems.map(item => (
                    <Accordion.Item eventKey={item.id} key={item.id} style={{marginBottom: '15px'}}>
                    <Accordion.Header>
                        <li><strong>{item.title}</strong></li> - {item.body}
                        </Accordion.Header>
                    <Accordion.Body><p><strong>Использование: </strong> {item.usage}</p>
                     <p><strong>Категория: </strong> {item.category}</p>
                     </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            </Container>
        </Container>
    );
};

export default SearchByName;