import React from 'react';
import  './ShowRoom.css';
import RotatedBall from './RotatedBall/RotatedBall';
import EnterPassword from './EnterPassword/EnterPassword';
import TranslatedCircle from './TranslatedCircle/TranslatedCircle';
import HoverMe from './HoverMe/HoverMe';
import Kaleidoscope from './Kaleidoscope/Kaleidoscope';
import Chapters from './Chapters/Chapters';

const showRoom = props => {
    return (
        <div className="showRoom">
            <Chapters></Chapters>
            <RotatedBall></RotatedBall>
            <EnterPassword></EnterPassword>
            <TranslatedCircle></TranslatedCircle>
            <HoverMe></HoverMe>
            <Kaleidoscope></Kaleidoscope>
            <Chapters></Chapters>
        </div>
    );
}

export default showRoom;
