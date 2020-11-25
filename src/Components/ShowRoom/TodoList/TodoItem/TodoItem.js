import React from 'react';
import  './TodoItem.scoped.scss';

const TodoItem = props => {
    return (
        <label className="todo">
            <input type="checkbox" onClick={props.todoChecked}/>
            <div className="label">{props.label}</div>
            <div className="fakeCheckbox-checked">
                <div></div>
                <div></div>
            </div>
            <div className="fakeCheckbox-unchecked"></div>
        </label>
    );
}

export default TodoItem;
