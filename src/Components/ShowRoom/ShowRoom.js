import React from 'react';
import  './ShowRoom.css';
import RotatedBall from './RotatedBall/RotatedBall';
import EnterPassword from './EnterPassword/EnterPassword';

const showRoom = props => {
    return (
        <div className="showRoom">
            <RotatedBall></RotatedBall>
            <EnterPassword></EnterPassword>
        </div>
    );
}

export default showRoom;
