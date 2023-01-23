import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function App() {
  return<div className="App">
    <header>
      <h1>Sky Immersive Twitch Sports Stream</h1>
      <p>Watch the sports you love with your favourite steamer!</p>
    </header>
    <Container className="streams">

      <div className="twitchVid">
        <iframe
            src="https://player.twitch.tv/?channel=koyotitospa&parent=localhost" title="Twitch video"
                allowFullScreen="true" height="500" width="800">
        </iframe>
      </div>
      <div className="chat">
        <iframe
            id="chat_embed"
            src="https://www.twitch.tv/embed/koyotitospa/chat?parent=localhost"
            height="500"
            width="350">
        </iframe>
      </div>
      <div className="ytVid">
        <iframe width="800" height="500" src="https://www.youtube.com/embed/o9bz3s5dG3U" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
      </div>
    </Container>



  </div>
}

export default App;
