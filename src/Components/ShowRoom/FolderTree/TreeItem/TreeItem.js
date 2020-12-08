import React from 'react';
import  './TreeItem.scoped.scss';

const TreeItem = props => {
  const children = props.data.children?.map(c => {
    return (<TreeItem key={c.id} data={c} value={c.id} onFolderClick={props.onFolderClick}></TreeItem>)
  });
    return (
        <div className="item">
          <div className={props.data.folder ? "folder" : "item"} value={props.data.id} onClick={props.onFolderClick.bind(null, props.data.id)}>{props.data.name}</div>
          <div className="children">{props.data.open ? children : []}</div>
        </div>
    );
}

export default TreeItem;
