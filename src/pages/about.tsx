import { FC } from 'react';

const About: FC = () => {
  return (
    <div className="about">
      <h1>Sobre</h1>
      <div className="content">
        <h3>Integrantes:</h3>
        <p>Guilherme Orellano Theodoro</p>
        <p>Marco Cavalett</p>
        <p>Roger Amadigi</p>
        <p>Vicenzo</p>
      </div>
      <div className="content">
        <h3>Código Fonte:</h3>
        <a href="https://github.com/JoelGamer/ac1-projeto-final">Projeto Github</a>
      </div>
    </div>
  );
}

export default About;
