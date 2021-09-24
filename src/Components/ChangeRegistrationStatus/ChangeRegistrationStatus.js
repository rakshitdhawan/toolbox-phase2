import "./ChangeRegistrationStatus.css";
import React, { useState } from "react";

const ChangeRegistrationStatus = props => {
  const [regID, setRegID] = useState("");
  const [note, setNote] = useState("");

  const regIDChangeHandler = event => {
    setRegID(event.target.value);
  };
  const noteChangeHandler = event => {
    setNote(event.target.value);
  };
  const approveHandler = event => {
    event.preventDefault();
    props.changeHandler(regID,note,'Approved');
  };
  const rejectHandler = event => {
    event.preventDefault();
    props.changeHandler(regID,note,'Rejected');
  };
  return (
    <form className="registration-status" >
      <div className="registration-status__controls">
        <div className="registration-status__control">
          <label>Registration ID</label>
          <input type="number" onChange={regIDChangeHandler} required></input>
        </div>
        <div className="registration-status__control">
          <label>Note*</label>
          <textarea rows="15" cols="40" onChange={noteChangeHandler}></textarea>
        </div>
        <div>
          <button onClick={approveHandler}>
            Approve
          </button>{'\u00A0'}
          <button  onClick={rejectHandler}>
            Reject
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChangeRegistrationStatus;
