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
import Paving from './Paving/Paving';
import Desert from './Desert/Desert';
import TodoList from './TodoList/TodoList';
import Counter from './Counter/Counter';
import Sky from './Sky/Sky';
import MovingSquare from './MovingSquare/MovingSquare';
import Grid from './Grid/Grid';
import Timer from './Timer/Timer';
import Gradient from './Gradient/Gradient';
import Slider from './Slider/Slider';
import Tree from './Tree/Tree';
import FolderTree from './FolderTree/FolderTree';

const showRoom = props => {
    return (
        <div className="showRoom">
            <RotatedBall></RotatedBall>
            <EnterPassword></EnterPassword>
            <TranslatedCircle></TranslatedCircle>
            <MovingSquare></MovingSquare>
            <Kaleidoscope></Kaleidoscope>
            <Chapters></Chapters>
            <Send></Send>
            <Triangles></Triangles>
            <Intersect></Intersect>
            <Counter></Counter>
            <Candle></Candle>
            <Paving></Paving>
            <Desert></Desert>
            <TodoList></TodoList>
            <Sky></Sky>
            <HoverMe></HoverMe>
            <Grid></Grid>
            <Timer></Timer>
            <Gradient></Gradient>
            <Slider></Slider>
            <Tree></Tree>
            <FolderTree></FolderTree>
        </div>
    );
}

export default showRoom;
