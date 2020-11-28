import React from 'react';
import  './Pixel.scoped.scss';

const Pixel = props => {
    return (
        <div className={props.checked ? "checked" : "un-checked"} onClick={props.click}>
        </div>
    );
}

export default Pixel;
