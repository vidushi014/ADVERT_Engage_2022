import React, { useState, useRef, useCallback, useEffect } from "react";
import { Modal } from "@mui/material";
import Webcam from "react-webcam";
import axios from "axios";
import { border } from "@mui/system";

export const WebcamComponent = () => (
  <Webcam videoConstraints={videoConstraints1} />
);

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
};
const videoConstraints1 = {
  width: 220,
  height: 320,
  facingMode: "user",
};

export const WebcamCapture = ({ open, setOpen, userData, setUserData }) => {
  const [image, setImage] = useState("");
  const [faceData, setFaceData] = useState([]);
  const webcamRef = useRef(null);


  const handleClose = () => {
    setOpen(false);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);

    const endpoint = "https://engage-vidushi.cognitiveservices.azure.com/";
    const key = "98cc111b83aa4e65a7ff0a2cf4e45a84";

    const headers = {
      "Ocp-Apim-Subscription-Key": key,
      "Ocp-Apim-Subscription-Region": "centralindia",
      "Content-Type": "application/octet-stream",
    };
    const url = `${endpoint}/face/v1.0/detect?&returnFaceLandmarks=false&returnFaceAttributes=age,gender,emotion`;

    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blobData) => {
        axios.post(url, blobData, { headers }).then((response) => {
          console.log(response.data);
          if (response.data.length > 0){
            setUserData(response.data[0]);
            setFaceData(response.data[0]);
            setTimeout(() => {handleClose()},2000)
          }
          else {
            setUserData([]);
            setFaceData([]);
          }
          // console.log();
        });
      });
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="webcam-container d-flex flex-column align-items-center">
        <div className="webcam-img">
          {image == "" ? (
            <Webcam
              audio={false}
              height={500}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={500}
              videoConstraints={videoConstraints}
              mirrored={true}
            />
          ) : (
            <img src={image} />
          )}
        </div>
        <div>
          {image != "" ? (
            <button
              className="webcam-btn retakeButton"
              onClick={(e) => {
                e.preventDefault();
                setImage("");
              }}
              // style={{ marginTop: 10px }}
            >
              Retake Image
            </button>
          ) : (
            <button
              className="webcam-btn"
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              // className=""
            >
              Capture
            </button>
          )}
        </div>
        <div>
          {faceData.length === 0 ? (
            <div>No Face Detected</div>
          ) : (
            <div>Face Detected</div>
          )}
        </div>
        <div className="faceResults">
          <div styles={{ border: "1px solid black", width: "50%" }}>
            {faceData == "" ? faceData : faceData.faceAttributes.gender}
          </div>
          {/* <div>{faceData==""?faceData:faceData.faceAttributes.emotion}</div> */}
          <div>{faceData == "" ? faceData : faceData.faceAttributes.age}</div>
        </div>
        {/* <div>{console.log(faceData)}</div> */}
      </div>
    </Modal>
  );
};
