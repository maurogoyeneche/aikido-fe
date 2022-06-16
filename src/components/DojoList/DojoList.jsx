import React from "react";
import { dojos } from "../../mocks/dojos";
import DojoDetails from "../../screens/dojo/DojoDetails";

const DojoList = () => {
  return dojos.map((dojo) => (
    <>
      <DojoDetails dojo={dojo} />
      <hr />
    </>
  ));
};

export default DojoList;
