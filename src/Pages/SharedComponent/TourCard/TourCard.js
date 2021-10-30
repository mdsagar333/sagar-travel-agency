import React from "react";
import { Link } from "react-router-dom";
import "./TourCard.css";
const TourCard = ({
  _id,
  country,
  duration,
  images,
  name,
  price,
  description,
}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <div class="card">
        <img src={images} class="card-img-top custom_card_img" alt={name} />
        <div class="card-body">
          <h5 class="card-title text-uppercase me-auto">{name}</h5>
          <p class="card-text text-justify custom_letter_spacing">
            {description.substr(0, 120)}...
          </p>
        </div>
        <div className="card-footer border-0 bg-white">
          <Link
            to={`/tour/${_id}`}
            class="btn btn-primary d-block  mb-2 text-uppercase"
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
