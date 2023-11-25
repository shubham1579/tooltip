import React, { useState } from 'react'

function Tooltip({ position }){

    // setting the state to toggle the visibility
    const [flag, setFlag] = useState(false);

    function handleMouseIn() {
        setFlag(true);
    }
    
    function handleMouseOut() {
        setFlag(false);

    }
    
    // toggling the visibility of the tooltip
    const visibility = { display: flag ? "block" : "none" }

    return (
        <div>
            <button className='tooltipContainer' onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                Hover over me
            </button>
            <div className={`${position} btn`} id="tooltipText" style={visibility}>
                I am {position} tooltip
            </div>
        </div>
    );
}

export default Tooltip;