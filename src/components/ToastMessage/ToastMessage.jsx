// import React, { useState } from "react";
// import Toast from "react-bootstrap/Toast";
// import { CheckCircle, XCircle } from "react-bootstrap-icons";
// import styles from "./ToastMessage.module.css";

// const ToastMessage = ({
//   bodyMessage,
//   status,
//   show,
//   setShow,
//   delay,
//   autohide,
// }) => {
//   //   const [show, setShow] = useState(false);

//   return (
//     <Toast
//       onClose={() => setShow(false)}
//       show={show}
//       delay={3000}
//       autohide
//       className={`${styles.toast} bg-success text-white fs-5 `}
//     >
//       <Toast.Body>
//         <span>
//           {status === "success" ? (
//             <CheckCircle size={20} className="mr-2" />
//           ) : (
//             <XCircle size={20} className="mr-2" />
//           )}
//         </span>

//         <span className="ms-4">{bodyMessage} </span>
//       </Toast.Body>
//     </Toast>
//   );
// };

// export default ToastMessage;

// ToastMessage.defaultProps = {
//   bodyMessage: "",
//   headerTitle: "",
//   status: "success",
//   autohide: true,
//   delay: 3000,
//   show: false,
//   onClose: () => {},
//   setShow: () => {},
// };
