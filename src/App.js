import { Input, Button, Drawer } from '@material-ui/core';
import Iframe from 'react-iframe'
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isOpen, setIframeOpen] = useState(false)
  const [url, setUrl] = useState("https://www.google.com/webhp?igu=1");

  const handleOnBlur = (event) => {
    setUrl(event.target.value)
 }

  return (
    <div className="App">
      <header className="App-header">
        <Input className="input" name="Url" value={ url } onChange={handleOnBlur} label="Url to be rendered"></Input>
        <Button color="primary" onClick={() => setIframeOpen(true)}>Render</Button>
        <Drawer anchor="bottom" style={ { height: 'calc(100% - 64px)', top: 64 } } className="drawer" open={ isOpen }>   
          <Button color="secondary" className="close-btn" onClick={ () => setIframeOpen(false) }>Close</Button>
          <Iframe url={url}
            width="auto"  
            height="auto"
            id="myId"
            className="iframe"
            display="initial"
            position="relative"/>
        </Drawer>
        </header>
    </div>
  );
}

export default App;
