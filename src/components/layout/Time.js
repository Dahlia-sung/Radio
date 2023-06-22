import React, { useState } from 'react';
import Moment from 'react-moment';
import { useInterval } from "use-interval";

function Time() {
    const [nowTime, setNowTime] = useState(Date.now())
    useInterval(() => {
        setNowTime(Date.now())
    }, 1000)
    return (
        <>
            <Moment format={"HH : mm : ss"} className='moment-box'>{nowTime}</Moment>
        </>
    );
}

export default Time;