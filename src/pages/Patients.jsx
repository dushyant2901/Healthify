import React from "react";
import PatientList from "../components/ListTable/PatientList";

function Patient({ setOpenModal }) {
  return (
    <div className="mt-4 ml-8">
      <PatientList setOpenModal={setOpenModal} />
    </div>
  );
}

export default Patient;
