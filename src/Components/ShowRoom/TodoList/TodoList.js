import React from 'react';
import  './TodoList.scoped.scss';
import TodoItem from './TodoItem/TodoItem';

const todos = [
    "Create a liste",
    "Write some CSS code", 
    "Amaze the world"
];

const TotoList = props => {
    const todoItems = todos.map((label, index) => (<TodoItem key={index} label={label}></TodoItem>));

    return (
        <div className="challenge">
            <div className="container">
                <h2>Friday</h2>
                <h3>March 4, 2016</h3>
                <hr/>
                {todoItems}
            </div>
        </div>
    );
}

export default TotoList;
