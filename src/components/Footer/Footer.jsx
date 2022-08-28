import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div
      id="footer"
      className="w-100 bg-dark text-light text-center d-flex flex-column align-items-center pb-3 pt-1"
    >
      <span>Copyright © {date}</span>
      <span>Iwama Shinshin Aiki Shuren Kai Uruguay</span>
      {/* <span>岩間神信合氣修練会 </span> */}
    </div>
  );
};

export default Footer;
