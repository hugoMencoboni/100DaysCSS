import React, { Component } from 'react';
import  './FolderTree.scoped.scss';
import { v4 as uuidv4 } from 'uuid';
import TreeItem from './TreeItem/TreeItem';

const initData = {
  id: uuidv4(),
  name: "root",
  folder: true,
  open: true,
  children: [
    {
      id: uuidv4(),
      name: "images",
      folder: true,
      open: true,
      children: [
        {
          id: uuidv4(),
          name: "image_1.png",
        },
        {
          id: uuidv4(),
          name: "image_2.png",
        }
      ],
    },
    {
      id: uuidv4(),
      name: "music",
      folder: true,
      open: false,
      children: [
        {
          id: uuidv4(),
          name: "music_1.mp3",
        },
        {
          id: uuidv4(),
          name: "music_2.mp3",
        }
      ],
    },
    {
      id: uuidv4(),
      name: "style.css",
    },
  ]
};

class FolderTree extends Component {
    state = {
      tree: initData
    }
        
    toggleFolder = (itemId) => {
      const tree = this.state.tree;
      const item = this.findById(tree, itemId);
      if(item?.folder) {
        item.open = !item.open;
        this.setState(tree);
      }
    };

    findById = (data, itemId) => {
      if(data?.id === itemId) {
        return data;
      }

      if(data?.children?.length) {
        for(let index = 0; index < data.children.length; index++) {
          const item = this.findById(data.children[index], itemId);
          if(item) {
            return item;
          }
        }
      }
    }

    render() {
      return (
        <div className="challenge">
          <TreeItem data={this.state.tree} onFolderClick={this.toggleFolder}></TreeItem>
        </div>
      );
    }
  }

export default FolderTree;

