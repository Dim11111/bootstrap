import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

const Slider = () => {
  return (
    <div className='slide'>
    <Carousel >
      <Carousel.Item>
        <img height={300} 
          className="d-block w-100"
          src="./img_1/1_1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Лучшие велопутешествия по России!</h3>
          <p>Мы несем ответственность за наших клиентов.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={300}
          className="d-block w-100"
          src="./img_1/2_1.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Турпоходы по самым живописным местам</h3>
          <p>С нами будет незабываемо.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={300}
          className="d-block w-100"
          src="./img_1/3_1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Наши надежные внедорожники к Вашим услугам</h3>
          <p>
            Поднимем тебя на любую высоту!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider