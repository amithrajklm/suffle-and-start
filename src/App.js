import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const colorClass = {
    1: "color-three",
    2: "color-two",
    3: "color-one",
    4: "color-two",
    5: "color-one",
    6: "color-four",
    7: "color-four",
    8: "color-three",
    9: "color-one"
  }
  const handleShuffle = () => {
    const shuffleNumber = numbers.sort( () => .5 - Math.random() )
    setNumbers(JSON.parse(JSON.stringify(shuffleNumber)))
  }
  const handleSort = () => {
    const sortNumber = numbers.sort();
    setNumbers(JSON.parse(JSON.stringify(sortNumber)))
  }

  const renderCards = () => {
    return (<div className='card-box'>
      <div className='row'>
        {numbers.map((item,index)=>{
          if(index<3)
          return <div key={index} className={`card ${colorClass[item]}`}>{item}</div>
        })}
      </div>
      <div className='row'>
      {numbers.map((item,index)=>{
        if(index>=3 && index<6)
          return <div key={index} className={`card ${colorClass[item]}`}>{item}</div>
        })}
      </div>
      <div className='row'>
      {numbers.map((item,index)=>{
        if(index>=6 && index<9)
          return <div key={index} className={`card ${colorClass[item]}`}>{item}</div>
        })}
      </div>
    </div>)
  }

  return (
    <div className="app">
      <header className='app-header'>Suffle and Sort</header>
      <div className='app-body'>
        {renderCards()}
        <div className='button-section'>
          <button className='app-button' onClick={() => handleShuffle()}>SHUFFLE</button>
          <button className='app-button' onClick={() => handleSort()}>SORT</button>
        </div>
      </div>
      <footer className='app-footer'>Suffle and sort by Amith Raj</footer>
    </div>
  );
}

export default App;
