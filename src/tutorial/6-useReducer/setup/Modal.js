import React, { useEffect } from 'react';

const Modal = ({modalValue, closeModal}) => {
  useEffect(()=>{
    setTimeout(closeModal,2000);
  })
  return <div>{modalValue}</div>;
};

export default Modal;
