import React, { useEffect } from "react";

//style
import './Modal.scss'

const Modal = ({onClose,children}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <>
      <div
        className="backdrop"
        onClick={onClose}
      ></div>
      <div className="content">
        {children}
      </div>
    </>
  );
};

export default Modal;