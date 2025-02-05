import React, { useState } from 'react';
import Todoitem from './Todoitem';

function Todolist(props) {
  const activityArr= props.activityArr;
  const setActivityArr= props.setActivityArr;

  return (
    <div className="bg-fuchsia-200 rounded-md p-2 flex-grow">
      <h1 className="font-medium text-2xl">Today's Activity</h1>
     
      {activityArr.length===0? <p>You haven't added anything</p>:""}
      <ul>
        {activityArr.map((item, index) => (
          <Todoitem
            key={item.id}
            activityArr={activityArr}
            setActivityArr={setActivityArr}
            id={item.id}
            activity={item.activity}
            index={index}  
          />
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
