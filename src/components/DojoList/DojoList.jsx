import React from "react";
import { dojos } from "../../mocks/dojos";
import DojoDetails from "../../screens/dojo/DojoDetails";

const DojoList = () => {
  return dojos.map((dojo, index) => (
    <React.Fragment key={index + 1}>
      <DojoDetails dojo={dojo} />
      <hr />
    </React.Fragment>
  ));
};

export default DojoList;
