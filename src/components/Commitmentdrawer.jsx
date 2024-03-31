import React, { useState } from 'react'
import { Drawer } from "antd";
const Commitmentdrawer = ({heading, children}) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  return (
    <div
    style={{
      borderRight: "1px solid var(--primary-color)",
      borderBottom: "1px solid var(--primary-color)",
      height: "50px",
      width: "300px",
      margin: "10px",
      boxShadow: "5px 5px 0.5rem"
    }}
    className="d-flex flex-column justify-content-center align-items-start"
  >
    <h5 
      style={{ textAlign: "left" }}
      onClick={showDrawer}
      className="atag fw-lighter"
    >
      {heading}
    </h5 >{" "}
    <Drawer
      title={heading}
      placement="bottom"
      closable={true}
      onClose={onClose}
      size="default"
      open={open}
      style={{ backgroundColor: "#2b2318" }}
    >
      <h5  className='fw-light' style={{ textAlign: "left", color: "var(--primary-color)" }}>
        {children}
      </h5>
    </Drawer>{" "}
  </div>
  )
}

export default Commitmentdrawer