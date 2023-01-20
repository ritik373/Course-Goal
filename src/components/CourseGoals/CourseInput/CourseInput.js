import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setisValid]=useState(true);

  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length>0){

      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setisValid(false)
      return;
    }

      props.onAddGoal(enteredValue);
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label  style={{color:!isValid? 'red':'green'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}  style={{ borderColor:!isValid?'red':'green' ,background:!isValid?'pink':'white'}} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
