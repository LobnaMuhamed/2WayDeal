import React from "react";
import "./footer.css";

import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";
import Icon5 from "../../assets/images/icon-5.svg";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import paymentImage from "../../assets/images/payment-method.png";

import appStore from "../../assets/images/app-store.jpg";
import googlePlay from "../../assets/images/google-play.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Newsletter from "../../components/newsletter/index";
import NewsletterImg from "../../assets/images/newsletter.png";

const Footer = () => {
  return (
    <>
      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>
                Stay home & get your{" "}
                <span className="fav_word">Fresh Food</span> <br />
                With <span className="fav_word">Discount Price </span>
              </h2>
              <p>Start You'r Daily Shopping with 2WayDeal</p>
              <br />
            </div>

            <div className="img">
              <img src={NewsletterImg} className="w-100" alt="img" />
            </div>
          </div>
        </div>
      </section>

      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon1} alt="img" />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon2} alt="img" />
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon3} alt="img" />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon4} alt="img" />
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon5} alt="img" />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link to="/">
                  <img src={Logo} className="logo" alt="img" />
                </Link>
                <br />
                <br />
                <p>Stay home & get your Fresh Food With Discount Price</p>
                <br />

                <p>
                  <LocationOnOutlinedIcon /> <strong>Address</strong>:
                  Alexandria Eygpt
                </p>
                <p>
                  <HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+02) -
                  01278398969{" "}
                </p>
                <p>
                  <EmailOutlinedIcon /> <strong>Email:</strong>{" "}
                  2WayDeal@gmail.com
                </p>
                <p>
                  <WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 -
                  18:00, Mon - Sat
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row">
                  <ul class=" flex ">
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Delivery Information</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Support Center</Link>
                    </li>
                    <li>
                      <Link to="#">Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <br className="res-hide" />
                <p>From App Store or Google Play</p>

                <div className="d-flex">
                  <Link to={""}>
                    <img src={appStore} width={150} alt="img" />
                  </Link>
                  <Link to={""}>
                    <img
                      src={googlePlay}
                      className="mx-2"
                      width={150}
                      alt="img"
                    />
                  </Link>
                </div>

                <br />

                <p>Secured Payment Gateways</p>
                <img src={paymentImage} alt="img" />
              </div>
            </div>

            <hr />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
