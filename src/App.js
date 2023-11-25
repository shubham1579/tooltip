import { useState } from 'react';
import Tooltip from './Tooltip';

const App = () => {

  // using different state as per the requirement
  const [selectedButton, setSelectedButton] = useState('top');
  const [position, setPosition] = useState('top');

  function handleButtonClick(e) {

    //setting the position of the tooltip from the buttons
    setPosition(e.target.value);

    //selecting the button
    setSelectedButton(e.target.value);
  }

  return (
    <div className="container">
      <h2>ToolTip</h2>
      <p>Chose the button to see the ToolTip in your selected direction</p>
      <div className='button-container'>
        <button onClick={handleButtonClick} value="left" className={selectedButton === "left" ? "selected" : ""}>Left</button>
        <button onClick={handleButtonClick} value="right" className={selectedButton === "right" ? "selected" : ""}>Right</button>
        <button onClick={handleButtonClick} value="top" className={selectedButton === "top" ? "selected" : ""}>Top</button>
        <button onClick={handleButtonClick} value="bottom" className={selectedButton === "bottom" ? "selected" : ""}>Bottom</button>
      </div>

      <Tooltip position={position} />
    </div>
  );
};

export default App;