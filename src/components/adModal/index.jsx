import React from "react";
import { Modal} from "@mui/material";
import ReactPlayer from 'react-player/youtube';
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";

const AdModal = ({ setOpen, open, itemName, userData }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="adModalMain">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="adPlayerMain">
          <ReactPlayer
            className='react-player'
            url={`https://youtu.be/${itemName}`}
            width='100%'
            height='100%'
            controls={true}
          />
          <CloseIcon
              style={{
                color: "white",
                position: "absolute",
                right: -20,
                top: -30,
                zIndex: 100,
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
        </div>
      </Modal>
    </div>
  );
};

export default AdModal;
