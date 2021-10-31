import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import imageArr from "./imageData";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const arr1 = imageArr.slice(0, 4);
const arr2 = imageArr.slice(4, 8);
const arr3 = imageArr.slice(8, 12);

const ImageComponent = ({ id, srcThum, srcLarg, handleShow, index }) => {
  return (
    <>
      <Zoom bottom duration={1500} delay={index * 100}>
        <img
          src={srcThum}
          alt="image"
          className="img-fluid mb-2"
          onClick={() => handleShow(srcLarg)}
        />
      </Zoom>
    </>
  );
};

const Gallery = () => {
  const [showModal, sethowModal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  console.log(imgSrc);
  const handleShow = (src) => {
    sethowModal(true);
    setImgSrc(src);
  };

  const handleCloseModal = () => {
    sethowModal(false);
    setImgSrc("");
  };

  return (
    <>
      <div className="container-fluid container-lg mb-5">
        <Fade duration={1500} delay={300} left>
          <h1 className="text-center mb-5 text-capitalize">
            Our photo gallery
          </h1>
        </Fade>
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-4">
            {arr1.map((el, index) => (
              <ImageComponent
                key={el.id}
                index={index}
                {...el}
                handleShow={handleShow}
              />
            ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {arr2.map((el, index) => (
              <ImageComponent
                key={el.id}
                index={index}
                {...el}
                handleShow={handleShow}
              />
            ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {arr3.map((el, index) => (
              <ImageComponent
                key={el.id}
                index={index}
                {...el}
                handleShow={handleShow}
              />
            ))}
          </div>
        </div>

        {/* modal */}
        <div className="modal_container">
          <div className={`${showModal ? "d-block" : "d-none"} custom_modal`}>
            <div className="d-flex justify-content-center align-items-center">
              <Zoom duration={1500}>
                <div className="modal_content p-3 mt-3 custom_modal_content">
                  <img src={imgSrc} alt="" className="custom_gallery_img" />
                  <div className="d-flex justify-content-end">
                    <div className="modal_btn_container">
                      <button
                        className="custom_btn btn"
                        onClick={handleCloseModal}
                      >
                        <AiOutlineCloseCircle />
                      </button>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
        {/* end of modal */}
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
