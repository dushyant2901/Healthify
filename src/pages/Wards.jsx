import React from "react";
import WardList from "../components/ListTable/WardList";

function Ward({ setOpenModal }) {
  return (
    <div className="mt-4 ml-8">
      <WardList setOpenModal={setOpenModal} />
    </div>
  );
}

export default Ward;
