import React from 'react';
import { Carousel } from 'react-bootstrap'
import suport from './images/timmy4.jpg'

const Slider = () => {
    return (
        <Carousel variant='dark'  style={{display: 'flex'}}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={suport}
                    alt="First Slide"
                />
                <Carousel.Caption>
                    <h3>Timmy</h3>
                    <p>
                        Сделан для Вашего удобства
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={suport}
                    alt="Second Slide"
                />
                <Carousel.Caption>
                    <h3>Timmy</h3>
                    <p>
                        Высокая производительность
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={suport}
                    alt="Third Slide"
                />
                <Carousel.Caption>
                    <h3>Timmy</h3>
                    <p>
                        Онлайн 24/7
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={suport}
                    alt="Forth Slide"
                />
                <Carousel.Caption>
                    <h3>Timmy</h3>
                    <p>
                        Красивый дизайн
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;