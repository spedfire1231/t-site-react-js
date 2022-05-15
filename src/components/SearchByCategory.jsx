import React, { useMemo, useState } from 'react';
import { Container, Accordion, Button, Alert, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { commandnames } from '../components/commandnames';

const SearchByCategory = () => {

    const [newvalue, setNewValue] = useState('')

    const [items, setItems] = useState(commandnames)

    const filteredCats = useMemo(() => {
        return items.filter(item => item.category.includes(newvalue))
    }, [newvalue])

    const onChangeCat = (e) => {
        setNewValue(e.target.value)
    }

    return (
        <Container>
        <Alert variant='info' style={{marginTop: '2rem'}}>
        <Alert.Heading>
            Команды Timmy
        </Alert.Heading>
        <p>
            Здесь Вы можете посмотреть список команд по категориям.
        </p>
        <hr />
        <p className='mb-0'>
        <li>Стандартный префикс бота - !</li>
        </p>
        <p><li>Всего команд - <strong>56</strong></li></p>
        </Alert>
                    <select value={newvalue} onChange={onChangeCat} style={{width: '30rem', height: '35px', marginTop: '1rem', marginLeft: '10px'}}>
                        <option value='' disabled>Выберите раздел</option>
                        <option value=''>Все команды</option>
                        <option value='Управление Ботом'>Управление Ботом</option>
                        <option value='Информационные'>Информационные</option>
                        <option value='Музыка'>Музыка</option>
                        <option value='Экономика'>Экономика</option>
                        <option value='Модерация'>Модерация</option>
                        <option value='Защита'>Защита</option>
                        <option value='Разное'>Разное</option>
                        <option value='Действия'>Действия</option>
                        <option value='Верификация'>Верификация</option>
                    </select>
                    <Button variant='info' size='sm' style={{width: 'auto', height: '35px', marginLeft: '15px', justifyContent: 'center', display: 'flex', marginTop: '1rem'}}><Link to='/commands' style={{color: 'black', textDecoration: 'none'}}>Перейти к разделу поиска по названию</Link></Button>
            <Container>
            <Accordion className='mb-2' alwaysOpen style={{width: 'auto', height: 'auto', marginTop: '2rem'}}>
                {filteredCats.map(item => (
                    <Accordion.Item eventKey={item.id} key={item.id} style={{marginBottom: '15px'}}>
                    <Accordion.Header>
                        <li><strong>{item.title}</strong></li>- {item.body}
                        </Accordion.Header>
                    <Accordion.Body><p>Выполняет: {item.usage}</p>
                     <p>Категория: {item.category}</p>
                     </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            </Container>
        </Container>
    );
};

export default SearchByCategory;