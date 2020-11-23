import React from 'react';
import  './Desert.scoped.scss';

const Desert = props => {
    return (
        <div className="challenge">  
            <div className="scene">              
                <div className="sun"></div>            
                <div className="pyramid p-1"></div>  
                <div className="pyramid p-2"></div>
                <div className="sand"></div>  
                <div className="shadow"></div>  
            </div>            
        </div>
    );
}

export default Desert;
