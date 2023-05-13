import React, { useState, useRef } from 'react';
import './App.css';

const App2 = () => {
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    setDragging(true);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    if (dragItem.current !== dragOverItem.current) {
      const listCopy = [...list];
      const draggedItem = listCopy[dragItem.current];
      listCopy.splice(dragItem.current, 1);
      listCopy.splice(dragOverItem.current, 0, draggedItem);
      dragItem.current = dragOverItem.current;
      setList(listCopy);
    }
  };

  const drop = (e) => {
    dragOverItem.current = null;
    setDragging(false);
  };

  return (
    <>
      {
        list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: 'lightblue',
              margin: '20px 25%',
              textAlign: 'center',
              fontSize: '40px',
              opacity: dragging && dragItem.current === index ? 0.5 : 1,
              cursor: 'grab'
            }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))
      }
    </>
  );
};

export default App2;
