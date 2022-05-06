import React from 'react';
import { Container } from 'react-bootstrap';

const Error = () => {
    return (
        <Container>
            <Container style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem', color: 'red'}}>
                <h1>Страница не найдена</h1>
                <p>Воспользуйтесь панелью меню для перехода на другую страницу.</p>
            </Container>
        </Container>
    );
};

export default Error;