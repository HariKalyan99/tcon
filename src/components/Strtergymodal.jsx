import React, { useState } from 'react';
import { Button, Modal } from 'antd';


const Stratergymodal = ({heading, children}) => {
    const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <div className='d-flex justify-content-start justify-content-lg-center'>
      <button onClick={() => setModal2Open(true)} className='interiorBtnModal' style={{boxShadow: "10px 5px 0.6rem black"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
  <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
</svg>
        </button>
      </div>
      <Modal
        title={heading}
        centered
        open={modal2Open}
        onCancel={() => setModal2Open(false)}
        footer={[
        ]}
      >
        <p>{children}</p>
      </Modal>
  </>
  );
};
export default Stratergymodal;