import React from 'react';
import  './ShowRoom.css';
import RotatedBall from './RotatedBall/RotatedBall';
import J2 from './J2/J2';

const showRoom = props => {
    return (
        <div className="showRoom">
            <RotatedBall></RotatedBall>
        </div>
    );
}

export default showRoom;
