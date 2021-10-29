import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Image } from "react-bootstrap";
import React, { useState } from "react";
import imageArr from "./imageData";

const arr1 = imageArr.slice(0, 4);
const arr2 = imageArr.slice(4, 8);
const arr3 = imageArr.slice(8, 12);

const ImageComponent = ({ id, srcThum, srcLarg, handleShow }) => {
  return (
    <>
      <img
        src={srcThum}
        alt="image"
        onClick={() => handleShow(srcLarg)}
        className="img-fluid mb-2"
      />
    </>
  );
};

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const handleImageModal = (src) => {
    setImgSrc(src);
  };

  const handleClose = () => setShow(false);
  const handleShow = (src) => {
    console.log(imgSrc);
    setImgSrc(src);
    setShow(true);
  };
  // const handleImageSource = (src) => setImgSrc(src);

  return (
    <>
      <div className="container-fluid container-lg">
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-4">
            {arr1.map((el) => (
              <ImageComponent key={el.id} {...el} handleShow={handleShow} />
            ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {arr2.map((el) => (
              <ImageComponent key={el.id} {...el} handleShow={handleShow} />
            ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {arr3.map((el) => (
              <ImageComponent key={el.id} {...el} handleShow={handleShow} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

{
  /* <Modal show={show} onHide={handleClose} style={{ maxWidth: "80%" }}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={imgSrc} alt="" className="custom_img" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */
}
