import React from "react";
import { dojos } from "../../mocks/dojos";
import DojoDetails from "../../screens/dojo/DojoDetails";

const DojoList = () => {
  console.log(dojos);
  return dojos.map((dojo) => (
    <>
      <DojoDetails dojo={dojo} />
      <hr />
    </>
  ));
};

export default DojoList;
