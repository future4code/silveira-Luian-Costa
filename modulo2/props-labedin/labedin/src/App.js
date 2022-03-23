import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './img/eu.jpeg';
import LogoUFR from './img/UFR.jpg';
import Loc from './img/localizacao.png';
import Email from './img/email.png';
import Labenu from './img/labenu.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil}
          nome="Luian Costa" 
          descricao="Oi, eu sou o Luian!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno
      imagem={Email}
      nome="E-mail"
      descricao="luian@email.com"/>
      <CardPequeno
      imagem={Loc}
      nome="Endereço"
      descricao="Gotham City"/>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Labenu} 
          nome="Labenu" 
          descricao="Estudante de Desenvolvimento Web Full Stack" 
        />
        
        <CardGrande 
          imagem={LogoUFR} 
          nome="UFR" 
          descricao="Cursando Ciências Econômicas" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
