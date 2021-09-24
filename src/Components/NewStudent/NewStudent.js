import React from "react";
import NewStudentForm from "./NewStudentForm";

const NewStudent = (props) => {
  const saveStudentHandler = student => {
    props.onAddStudent(student)
  };

  return <NewStudentForm onSaveStudent={saveStudentHandler} />;
};

export default NewStudent;
