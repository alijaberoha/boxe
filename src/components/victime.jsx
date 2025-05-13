import './victime.css';
import { useState, useRef } from 'react';
import Freezer from '../../public/img/R.png'
import Goku from '../../public/img/kameh.jpg'

export default function Victime({ onImageClick }) {
  const [rotate, setRotate] = useState(false);
  const audioRef = useRef(null); 

  const handleClick = () => {
    setRotate(true);
    onImageClick();

    
    if (audioRef.current) {
    audioRef.current.currentTime = 4;
      audioRef.current.play();
    }


    setTimeout(() => setRotate(false), 100);
  };

  return (
    <>
      <div className='fond'>
        <div className='Cell'>
          <img
            src={Freezer}
            alt="freezer"
            style={{
              transform: rotate ? 'rotate(20deg)' : 'rotate(-20deg)', 
              transition: 'transform 0.1s ease',
            transform: rotate ? 'rotate(-20deg)' : 'rotate(0deg)'
            }}
          />
        </div>
        <div className='btn' onClick={handleClick}>
          <button>
            <img src={Goku} alt="bouton attaque" />
          </button>
        </div>

      
        <audio ref={audioRef} src="public/Energy Ball Impact DBZ Sound Effect.mp3" />
      </div>
    </>
  );
}
