import React from 'react';
import  './EnterPassword.scoped.scss';

const EnterPassword = props => {
    return (
        <div className="challenge">
            <div className="container">
                <input type="text" className="box" placeholder='Enter "password"' />
                <div className="secret box">MD5-SU3-CX8</div>
                <div className="secret-text">secret</div>
                <button>test annimation</button>
            </div>
        </div>
    );
}

export default EnterPassword;
