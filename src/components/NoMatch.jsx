import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

function NoMatch() {
        let location = useLocation();
      
        return (
          <Container>
              <h1 style={{justifyContent: 'center', display: 'flex', color: 'red'}}>Упс, поиск не удался!</h1>
              <h2 style={{justifyContent: 'center', display: 'flex'}}>Страница не найдена: <code>{location.pathname}</code></h2>
          </Container>
        );
      }

export default NoMatch;