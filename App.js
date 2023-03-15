import ethImg from './icon-ethereum.svg';
import './App.css';
import bgImg from './image-equilibrium.jpg';
import clock from './icon-clock.svg';
import cover from './image-avatar.png';

function App() {
  return (
    <div className='cont'>
      <img src={bgImg} className="bg-img" />
      <Text />
      <Etherium />
      <Hr />
      <BottomContent />
    </div>
  );
}

function Text() {
  return (
    <div className='header-text-content'>
      <h1 className='header-text'>Equilibrium #3429</h1>
      <p className='paragrap'>Our Equilibrium collection promotes balance and calm.</p>
    </div>
  )
}

function Etherium() {
  return (
    <div className='etherium'>
      <div className='eth'>
        <img className='eht-icon' src={ethImg} />
        <h1 className='eth-text' >0.041 ETH</h1>
      </div>
      <div className='clock'>
        <img className='clock-img' src={clock} />
        <h1 className='clock-text'>3 days left</h1>
      </div>
    </div>
  )
}

function Hr() {
  return <hr />
}

function BottomContent() {
  return (
    <div className='bottom-content'>
      <img className='img' src={cover} />
      <div className='create'>
        <h1 className='create-text'>Creation Of</h1>
        <h1 className='name'>Jules Wyvern</h1>
      </div>

    </div>
  )
}

export default App;
