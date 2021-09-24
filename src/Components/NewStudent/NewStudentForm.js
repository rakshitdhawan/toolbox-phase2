import React, { useState } from "react";
import "./NewStudentForm.css";
const NewStudentForm = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [dob, setDOB] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [courseChoice, setCourseChoice] = useState("Mechanical");

  const fNameChangeHandler = event => {
    setFirstName(event.target.value);
  };
  const lNameChangeHandler = event => {
    setLastName(event.target.value);
  };
  const emailChangeHandler = event => {
    setEmailAddress(event.target.value);
  };
  const collegeNameChangeHandler = event => {
    setCollegeName(event.target.value);
  };
  const courseChoiceChangeHandler = event => {
    setCourseChoice(event.target.value);
  };
  const dateChangeHandler = event => {
    setDOB(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const student = {
      RegId: Math.floor(Math.random()*1000).toString(),
      fName: firstName,
      lName: lastName,
      Email: emailAddress,
      dateOfBirth: dob,
      cName: collegeName,
      cChoice: courseChoice,
      Status: "Pending",
      Note: ""
    };

    props.onSaveStudent(student);
  };

  return (
    <form className="new-student" onSubmit={submitHandler}>
      <div className="new-student__controls">
        <div className="new-student__control">
          <label>First Name* </label>
          <input type="text" onChange={fNameChangeHandler} value={firstName} required/>
        </div>
        <div className="new-student__control">
          <label>Last Name* </label>
          <input type="text" onChange={lNameChangeHandler} value={lastName} required/>
        </div>
        <div className="new-student__control">
          <label>Email Address* </label>
          <input
            type="email"
            onChange={emailChangeHandler}
            value={emailAddress} required
          />
        </div>
        <div className="new-student__control">
          <label>Date Of Birth* </label>
          <input type="date" onChange={dateChangeHandler} value={dob} required/>
        </div>
        <div className="new-student__control">
          <label>College Name </label>
          <input
            type="text"
            onChange={collegeNameChangeHandler}
            value={collegeName} required
          />
        </div>
        <div className="new-student__control">
          <label>Course Choice </label>
          <select
            className="new-student__control"
            onChange={courseChoiceChangeHandler}
            value={courseChoice} required
          >
            <option>Computer Science</option>
            <option>Mechanical</option>
            <option>Electrical</option>
          </select>
        </div>
        <div>
          <button type="submit">Add</button>
          <button type="reset"> Reset </button>
        </div>
      </div>
    </form>
  );
};

export default NewStudentForm;
