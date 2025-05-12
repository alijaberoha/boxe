import './victime.css';
import { useState, useRef } from 'react';

export default function Victime({ onImageClick }) {
  const [rotate, setRotate] = useState(false);
  const audioRef = useRef(null); // pour contrôler le son

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
            src="public/img/R.png"
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
            <img src="public/img/kameh.jpg" alt="bouton attaque" />
          </button>
        </div>

      
        <audio ref={audioRef} src="public/Energy Ball Impact DBZ Sound Effect.mp3" />
      </div>
    </>
  );
}
