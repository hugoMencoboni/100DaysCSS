import React from 'react';
import  './Tree.scoped.scss';

const Tree = props => {
    return (
        <div className="challenge">
            <div className="tree">
                <div className="leafs">
                    <div></div>
                    <div></div>
                </div>
                <div className="structure">
                    <div className="trunk"></div>
                    <div className="branch-container">
                        <div className="branch"></div>
                    </div>
                    <div className="branch-container right">
                        <div className="branch"></div>
                    </div>
                    <div className="branch-container">                        
                        <div className="branch"></div>
                    </div>
                    <div className="branch-container right">                        
                        <div className="branch"></div>
                    </div>
                    <div className="branch-container">
                        <div className="branch"></div>
                    </div>
                </div>
            </div>
            <div className="base"></div>
        </div>
    );
}

export default Tree;
