import React, { useState } from 'react';
import {  Drawer, theme } from 'antd';
const Interiormatch = ({interior}) => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const containerStyle = {
    position: 'relative',
    height: 400,
    overflow: 'hidden',
    borderRadius: "0px",
  };
  return (
    <div style={containerStyle}>
      <img src={interior.cover} alt="cover-img" style={{height: "100%", width: "100%"}}/>
      <div
        className='position-absolute bottom-0 d-flex justify-content-center align-items-center w-100 mb-5'
      >
        <button onClick={showDrawer} className='interiorBtn'>
          Interior palatte 
        </button>
      </div>
     <Drawer
        title="Basic Drawer"
        placement="top"
        closable={true}
        onClose={onClose}
        open={open}
      >
        <img src={interior.materials} alt="" style={{height: "100%", width: "100%", objectFit: "cover"}}/>
      </Drawer>
    </div>
  );
};
export default Interiormatch;