import React from 'react';
import './App.css';

import works from './works';

function App() {
    return (
        <div className='app'>
            <header className='header'>
                <div className='container'>
                    <div className='header-brand'>Иван Иванов</div>
                </div>
            </header>

            <main className='main'>
                <div className='about'>
                    <div className='about__bg'></div>
                    <div className='container'>
                        <h1 className='about__title'>
                            React-разработчик Иван Иванов
                        </h1>
                        <div className='about__description'>
                            <p>
                                Разрабатываю на самом крутом в мире фреймворке
                                <br />
                                самые крутые в мире SPA!
                            </p>
                            <p>
                                С удовольствием и вам что-нибудь разработаю ;)
                            </p>
                        </div>
                    </div>
                </div>

                <div className='portfolio'>
                    <div className='container'>
                        {works.map((work, index) => (
                            <a
                                href={work.link}
                                className='portfolio-item'
                                key={index}
                            >
                                <img
                                    className='portfolio-item__screenshot'
                                    src={work.screenshot}
                                    alt={work.title}
                                />
                                <div className='portfolio-item__title'>
                                    {work.title}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
