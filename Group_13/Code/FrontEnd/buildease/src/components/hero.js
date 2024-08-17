import React from "react";

import Script from "dangerous-html/react";
import PropTypes from "prop-types";

import "./hero.css";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/image12.jpeg";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content">
          <h1 className="hero-text thq-heading-1">{props.heading1}</h1>
          <p className="hero-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <Link to="/projects">
            <button className="thq-button-filled hero-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </Link>
          <Link to="/contactus">
            <button className="thq-button-outline hero-button1">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="hero-content1">
        <div className="hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
            {/* <div>Hi</div> */}
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container1">
          {/* <Script
            html={`<style>
                    @keyframes scroll-x {
                      from {
                        transform: translateX(0);
                      }
                      to {
                        transform: translateX(calc(-100% - 16px));
                      }
                    }

                    @keyframes scroll-y {
                      from {
                        transform: translateY(0);
                      }
                      to {
                        transform: translateY(calc(-100% - 16px));
                      }
                    }
                  </style>
                  `}
          ></Script> */}

          <Script
  html={`<style>
    @keyframes scroll-x {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% - 16px));
      }
    }

    @keyframes scroll-y {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(calc(-100% - 16px));
      }
    }

    .thq-animated-group-horizontal {
      animation: scroll-x 50s linear infinite;
    }

    .thq-animated-group-horizontal-reverse {
      animation: scroll-x 50s linear infinite reverse;
    }

    .thq-animated-group-vertical {
      animation: scroll-y 50s linear infinite;
    }

    .thq-animated-group-vertical-reverse {
      animation: scroll-y 50s linear infinite reverse;
    }
  </style>`}
/>


        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  image1Src: image1,
  image2Src: image2,
  image3Src: image3,
  image4Src: image4,
  image5Src: image5,
  image6Src: image6,
  image7Src: image7,
  image8Src: image8,
  image9Src: image9,
  image10Src: image10,
  image11Src: image11,
  image12Src: image12,
  heading1: "Welcome to BUILDEASE",
  action1: "Explore Our Projects",
  action2: "Contact Us",
  image1Alt: "Building under construction",
  image2Alt: "Architectural design",
  image3Alt: "Interior design",
  image4Alt: "Project management",
  image5Alt: "Renovation work",
  image6Alt: "Landscaping services",
  image7Alt: "Building maintenance",
  image8Alt: "Eco-friendly construction",
  image9Alt: "Skilled workforce",
  image10Alt: "Quality materials",
  image11Alt: "Customer satisfaction",
  image12Alt: "Innovative solutions",
  content1: "Your one-stop solution for all your construction needs.",
};

Hero.propTypes = {
  action1: PropTypes.string,
  action2: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  image5Src: PropTypes.string,
  image6Src: PropTypes.string,
  image7Src: PropTypes.string,
  image8Src: PropTypes.string,
  image9Src: PropTypes.string,
  image10Src: PropTypes.string,
  image11Src: PropTypes.string,
  image12Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image12Alt: PropTypes.string,
};

export default Hero;
