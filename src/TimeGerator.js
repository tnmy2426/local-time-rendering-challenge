import React, { useState } from 'react'

const TimeGerator = () => {
    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString() )
    const timeGenarate = () =>{
        setCurrTime(new Date().toLocaleTimeString() )
    }
    return (
        <div className='time_genarator'>
            <h3>Current Time: <span>{currTime}</span> </h3>
            <button onClick={timeGenarate}>Get Current Time</button>
        </div>
    )
}

export default TimeGerator
