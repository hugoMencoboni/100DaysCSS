import React from 'react';
import  './Candle.scoped.scss';

const Candle = props => {
    return (
        <div className="challenge">  
            <div className="light-box">
                <div className="light"></div>
            </div>            
            <div className="string"></div>
            <div className="body"><div></div></div>
            <div className="support"></div>
        </div>
    );
}

export default Candle;
