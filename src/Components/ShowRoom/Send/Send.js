import React from 'react';
import  './Send.scoped.scss';

const Send = props => {
  return (
    <div className="challenge">
        <input type="checkbox" name="cb" id="cb"/>
        <label className="container" htmlFor="cb">      
          <div className="send">Send</div>
          <div className="done">Done</div>
        </label>
    </div>
  );
}

export default Send;
