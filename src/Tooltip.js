import React, { useState } from 'react'

function Tooltip({ position }){

    // setting the state to toggle the visibility
    const [isVisible, setIsVisible] = useState(false);

    function handleMouseIn() {
        setIsVisible(true);
    }
    
    function handleMouseOut() {
        setIsVisible(false);
    }
    
    // toggling the visibility of the tooltip
    const visibility = { display: isVisible ? "block" : "none" }

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