import { useState } from 'react';
import './App.css';
import Barre from './components/energie';
import Victime from './components/victime';

function App() {
  const [vie, setVie] = useState(10); 

  const handleImageClick = () => {
    if (vie > 0) {
      setVie(vie - 1);
    }
    
  };

  return (
    <>
      <h1>Freezer <span>(LEVEL MAX)</span></h1>
      <Barre vie={vie} />
      <Victime onImageClick={handleImageClick} />
    </>
  );
}

export default App;
