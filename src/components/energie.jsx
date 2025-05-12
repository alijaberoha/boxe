import './energie.css';

export default function Barre({ vie }) {
  return (
    <div className='cont'>
      <div className='rectangle'>
        <div className='carre1' style={{ backgroundColor: vie >= 1 ? 'green' : 'white' }}></div>
        <div className='carre2' style={{ backgroundColor: vie >= 2 ? 'green' : 'white' }}></div>
        <div className='carre3' style={{ backgroundColor: vie >= 3 ? 'green' : 'white' }}></div>
        <div className='carre4' style={{ backgroundColor: vie >= 4 ? 'green' : 'white' }}></div>
        <div className='carre5' style={{ backgroundColor: vie >= 5 ? 'green' : 'white' }}></div>
        <div className='carre6' style={{ backgroundColor: vie >= 6 ? 'green' : 'white' }}></div>
        <div className='carre7' style={{ backgroundColor: vie >= 7 ? 'green' : 'white' }}></div>
        <div className='carre8' style={{ backgroundColor: vie >= 8 ? 'green' : 'white' }}></div>
        <div className='carre9' style={{ backgroundColor: vie >= 9 ? 'green' : 'white' }}></div>
        <div className='carre10' style={{ backgroundColor: vie >= 10 ? 'green' : 'white' }}></div>
      </div>
    </div>
  );
}
