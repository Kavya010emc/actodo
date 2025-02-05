import React from 'react';

function Todoitem(props) {
  const { activityArr, setActivityArr, id, activity, index } = props; // Destructure props

  function handleDelete(deletedid) {
    const tempArr = activityArr.filter(function(item) {
      if(item.id === deletedid) {
        return false;
      } else {
        return true;
      }
    });
    setActivityArr(tempArr); // Update the state with the filtered array
  }

  return (
    <div className='flex justify-between'>
      <p>{index + 1}. {activity}</p> {/* Now index is properly accessed */}
      <button
        className="text-red-600"
        onClick={() => handleDelete(id)} // Call handleDelete with the task id
      >
        Delete
      </button>
    </div>
  );
}

export default Todoitem;
