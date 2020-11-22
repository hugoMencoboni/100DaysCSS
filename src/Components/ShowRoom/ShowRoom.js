import React from 'react';
import  './ShowRoom.css';
import RotatedBall from './RotatedBall/RotatedBall';
import EnterPassword from './EnterPassword/EnterPassword';
import TranslatedCircle from './TranslatedCircle/TranslatedCircle';
import HoverMe from './HoverMe/HoverMe';
import Kaleidoscope from './Kaleidoscope/Kaleidoscope';
import Chapters from './Chapters/Chapters';
import Send from './Send/Send';
import Triangles from './Triangles/Triangles';
import Intersect from './Intersect/Intersect';
import Candle from './Candle/Candle';

const showRoom = props => {
    return (
        <div className="showRoom">
            <RotatedBall></RotatedBall>
            <EnterPassword></EnterPassword>
            <TranslatedCircle></TranslatedCircle>
            <HoverMe></HoverMe>
            <Kaleidoscope></Kaleidoscope>
            <Chapters></Chapters>
            <Send></Send>
            <Triangles></Triangles>
            <Intersect></Intersect>
            <Candle></Candle>
        </div>
    );
}

export default showRoom;
