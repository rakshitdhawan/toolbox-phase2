import "./App.css";
import NewStudent from "./Components/NewStudent/NewStudent";
import { useState } from "react";
import ShowStudents from "./Components/ShowStudents/ShowStudents";
import ChangeRegistrationStatus from "./Components/ChangeRegistrationStatus/ChangeRegistrationStatus";

const DUMMY_STUDENTS = [
  {
    RegId: "001",
    fName: "Rakshit",
    lName: "Dhawan",
    Email: "rdhawan@cvent.com",
    dateOfBirth: "22/12/1996",
    cName: "MSIT",
    cChoice: "Computer Science",
    Status: "Pending",
    note: ""
  },
  {
    RegId: "002",
    fName: "Rakshit",
    lName: "Dhawan",
    Email: "rdhawan@cvent.com",
    dateOfBirth: "22/12/1996",
    cName: "MSIT",
    cChoice: "Computer Science",
    Status: "Approved",
    note: ""
  },
  {
    RegId: "003",
    fName: "Rakshit",
    lName: "Dhawan",
    Email: "rdhawan@cvent.com",
    dateOfBirth: "22/12/1996",
    cName: "MSIT",
    cChoice: "Computer Science",
    Status: "Approved",
    note: ""
  }
];
function App() {
  const [students, setStudents] = useState(DUMMY_STUDENTS);

  const addNewStudentHandler = student => {
    setStudents(previousStudents => {
      return [student, ...previousStudents];
    });
  };
  const changeStudentStatusHandler = (RegId,note,status) => {
    let studentIndex = students.findIndex(student => student.RegId===RegId)
    if (students[studentIndex].Status === 'Pending'){
      students[studentIndex].note = note
      students[studentIndex].Status = status
      
    }
    
    setStudents(previousStudents => {
      return [...students];
    });
  };
  return (
    <div>
      <div className="float-container">
        <div className="float-child">
          <NewStudent onAddStudent={addNewStudentHandler} />
        </div>
        <ChangeRegistrationStatus
        items={students}
        changeHandler={changeStudentStatusHandler}
      />
        <div className="float-child">
          <ShowStudents items={students} />
        </div>
      </div>
    </div>
  );
}

export default App;
