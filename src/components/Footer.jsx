import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer className='pt-4 my-md-5 border-top'>
        <div className="foot">
            <h3>Обратная связь</h3>
            <div>
            <input className="name"
                type="text"
                size="25"
                placeholder="Имя"
                name="name"
                required
              />
              </div>
              <div>
              <input className="name"
                type="email"
                size="25"
                placeholder="Электронная почта"
                name="email"
                required
              />
              </div>
              <div>
              <textarea
                class="input" className="name"
                rows="3"
                cols="35"
                placeholder="Сообщение"
                required
              ></textarea>
              </div>
              <Button variant="outline-info">
                Отправить
              </Button>
        </div>      

      </footer>

    </div>
  )
}

export default Footer